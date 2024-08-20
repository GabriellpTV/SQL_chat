import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const [user, setUser] = useState();

    async function cadastrarUsuario(user_name, user_email, user_password) {
        try {
            const response = await axios.post(`${apiUrl}/api/user/cadastro`, {
                user_name,
                user_email,
                user_password,
            });
            return response.data;
        } catch (err) {
            console.error('Erro ao cadastrar usuario:', err); // APAGAR DPS
            if (err) {
                throw new Error(err.response.data);
            } else {
                throw new Error('Erro ao conectar com a API');
            }
        }
    }

    async function buscarUsuario(user_email, user_password) {
        try {
            const response = await axios.get(`${apiUrl}/api/user/busca`, {
                params: {
                    user_email,
                    user_password
                }
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            setUser(response.data)
            return response.data;
        } catch (err) {
            console.error('Erro ao buscar usuario:', err);// APAGAR DPS
            if (err) {
                throw new Error(err.response.data);
            } else {
                throw new Error('Erro ao conectar com a API');
            }
        }
    }

    async function loginUser(userToken) {
        try {
            const response = await axios.get(`${apiUrl}/api/user/login`, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            });
            return response.data;
        } catch (err) {
            console.error('Erro ao buscar usuario com token:', err);
            return null;
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    useEffect(() => {
        const userToken = localStorage.getItem("token");
        
        if (userToken) {
            loginUser(userToken).then(data => {
                if (data) {
                    setUser(data.user);
                } else {
                    logout();
                }
            }).catch(() => logout());
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, cadastrarUsuario, buscarUsuario, logout }}
        >
            {children}
        </AuthContext.Provider>);
}
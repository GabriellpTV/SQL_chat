import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Input from "../components/form/Input";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

export default function Signin() {
    const navigate = useNavigate();
    const { buscarUsuario } = useAuth();

    const [user_email, setUser_email] = useState("");
    const [user_password, setUser_password] = useState("");
    const [error, setError] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    const handleLogin = async () => {
        if (!user_email || !user_password) {
            setError("Preencha todos os campos");
            return;
        }
        try {
            const data = await buscarUsuario(user_email, user_password);
            const text = "Login realizado com sucesso";
            const type = "success";
            navigate("/");
        } catch (err) {
            let errorMessage = 'Erro ao conectar com a API';
            if (err.response) {
                errorMessage = err.response.data.mensagem || errorMessage;
            } else if (err.message) {
                errorMessage = err.message;
            }
            setError(errorMessage); 
            console.log(err); 
        }
    };
    
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-2/5 h-auto flex flex-col border-2 border-gray-300 space-y-6 rounded-lg p-8 bg-white">
                <h1 className="text-center text-4xl text-gray-600">Logar-se</h1>
                <Input
                    customText="E-mail:"
                    value={user_email}
                    onChange={(e) => setUser_email(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <Input
                    customText="Senha:"
                    value={user_password}
                    onChange={(e) => setUser_password(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="flex justify-center">
                    <div className="flex space-x-4">
                        <button className="border-2 border-black rounded-md p-2" onClick={handleLogin}>Logar-se</button>
                        <div className="flex items-center space-x-2">
                            <button onClick={() => navigate("/signup")}>Cadastre-se</button>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

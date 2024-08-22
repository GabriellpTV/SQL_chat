import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContactsContext = createContext({});

export const ContactsProvider = ({ children }) => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const [isOpen, setIsOpen] = useState();
    const [contacts, setContacts] = useState();

    async function toggleIsOpen(state) {
        setIsOpen(state)
    }

    async function cadastrarContato(contact_id, user_id, chat_name) {
        try {
            const response = await axios.post(`${apiUrl}/api/contato/cadastro`, {
                contact_id,
                user_id,
                chat_name,
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

    async function buscarContatos(contacts_order) {
        try {
            const response = await axios.get(`${apiUrl}/api/contato/busca`, {
                params: contacts_order ? { contacts_order } : {}
            });
            const contatos = response.data;
            setContacts(contatos);
            return contatos;
        } catch (err) {
            console.error('Erro ao buscar Contatos:', err);
            setContacts(err.response.data)
            const errorMessage = err.response?.data || 'Erro ao conectar com a API';
            throw new Error(errorMessage);
        }
    }
    

    useEffect(() => {
        const contacts_order = localStorage.getItem("contacts_order");
        buscarContatos(contacts_order)
    }, [contacts, isOpen]);

    return (
        <ContactsContext.Provider
            value={{ isOpen, contacts, cadastrarContato, buscarContatos, toggleIsOpen }}
        >
            {children}
        </ContactsContext.Provider>);
}
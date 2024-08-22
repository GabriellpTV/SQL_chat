import Chat from "./Chat";
import Messages from "./Messages";
import ContainerContatos from "./ContainerContatos";
import { useState, useEffect, useCallback } from "react"; 
import useContacts from "../../hooks/useContacts"; 

export default function Chats() {
    const { isOpen, toggleIsOpen } = useContacts();
    // Adicionar o onclick pra setar um novo contato
    // adicionar A função que busca os contatos toda alteração que ocorre
    // importar um context para abrir as Mensagens

    const criarContato = () => {
        toggleIsOpen(true); 
    };

    const handleKeyPress = useCallback((event) => {
        if (event.key === 'Escape') {
            toggleIsOpen(false);
        }
    }, [toggleIsOpen]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div className="flex justify-center h-full p-10 pt-0 items-center">
            {isOpen ? <ContainerContatos /> : ''}

            <div className="flex flex-1 h-5/6 justify-center">
                <Chat customClick={criarContato} />
                <Messages />
            </div>
        </div>
    );
}

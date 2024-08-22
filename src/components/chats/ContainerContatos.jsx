import { useState } from "react"
import Input from "../form/Input";
import useContacts from "../../hooks/useContacts";
import useAuth from "../../hooks/useAuth";

export default function ContainerContatos() {
    const { cadastrarContato, toggleIsOpen } = useContacts();
    const { user } = useAuth()
    const [contact_id, setContact_id] = useState()
    const [chat_name, setChat_name] = useState()
    const [error, setError] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleContato();
        }
    };

    const handleContato = async () => {
        const user_id = user.user_id
        if (!contact_id || !chat_name || !user_id) {
            setError("Preencha todos os campos");
            return;
        }
        
        try {
            const data = await cadastrarContato(contact_id, user_id, chat_name );
            toggleIsOpen(false)

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
    }

    return (
        <div className="border-2 border-gray-300 position absolute bg-white w-3/12 h-3/6 rounded-lg ">
            <h1 className="text-center text-4xl text-gray-600 mt-12">Novo Contato</h1>
            <div className="flex flex-col mt-5 space-y-6">
                <Input
                    customText="Nome:"
                    value={chat_name}
                    onChange={(e) => setChat_name(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <Input
                    customText="Email:"
                    value={contact_id}
                    onChange={(e) => setContact_id(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                {error && <p className="text-red-500 text-center">{error}</p>}
            </div>
            <div className="flex flex-col items-center mt-6">
                <p className="flex-col border-2 border-gray-600 rounded-lg m-2 items-center p-2 text-gray-600 text-center select-none text-2xl cursor-pointer w-36" onClick={handleContato}>
                    Cadastrar
                </p>
            </div>
        </div>
    )
}
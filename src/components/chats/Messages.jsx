import { useState } from 'react';
import Message from './Message';

export default function Messages() {
    const meuID = 0;
    const chatID = 1;
    const [mensagens, setMensagens] = useState([
        { id: 0, nome: 'Você', text: "Olá, como você está? Espero que esteja tudo bem por aí. Tenho uma pergunta sobre o projeto.", hora: '02:01' },
        { id: 1, nome: 'Gabriel Alves Lopes', text: "Estou bem, obrigado! O que você precisa saber sobre o projeto?", hora: '02:02' },
        { id: 0, nome: 'Você', text: "Eu gostaria de saber qual é o prazo para a entrega das próximas etapas.", hora: '02:03' },
        { id: 1, nome: 'Gabriel Alves Lopes', text: "O prazo para as próximas etapas é na próxima sexta-feira. Precisamos garantir que tudo esteja pronto até lá.", hora: '02:04' },
        { id: 0, nome: 'Você', text: "Entendi! Vou trabalhar nisso e te mantenho atualizado. Obrigado pela informação!", hora: '02:05' },
        { id: 1, nome: 'Gabriel Alves Lopes', text: "Perfeito! Qualquer coisa, estou à disposição. Até mais!", hora: '02:06' },
        { id: 0, nome: 'Você', text: "Aliás, você já revisou o relatório final? Precisamos garantir que tudo esteja correto antes da apresentação.", hora: '02:07' },
        { id: 1, nome: 'Gabriel Alves Lopes', text: "Sim, eu revisei o relatório e fiz algumas correções. Vou enviar a versão final ainda hoje.", hora: '02:08' },
        { id: 0, nome: 'Você', text: "Ótimo! Se precisar de ajuda com qualquer coisa, é só avisar. Também vou revisar o material de apresentação.", hora: '02:09' },
        { id: 1, nome: 'Gabriel Alves Lopes', text: "Combinado. Agradeço pela ajuda. Vamos garantir que nossa apresentação seja um sucesso!", hora: '02:10' },
        { id: 0, nome: 'Você', text: "Com certeza! Vamos em frente e fazer o melhor trabalho possível.", hora: '02:11' },
        { id: 1, nome: 'Gabriel Alves Lopes', text: "Exatamente! Fico feliz em ter uma equipe tão dedicada. Até mais!", hora: '02:12' },
        { id: 0, nome: 'Você', text: "Até mais! Vou terminar de preparar o material e te aviso quando estiver tudo pronto.", hora: '02:13' },
    ]);

    return (
        <div className="flex flex-col w-6/12 border-2 rounded-lg">
            <div className="flex-1 overflow-y-auto p-2">
                {mensagens.map(({ id, text, nome, hora }, index) => (
                    id === meuID ? (
                        <Message key={index} user={1} text={text} nome={nome} hora={hora} customClass="ml-auto bg-gray-200"/>
                    ) : id === chatID ? (
                        <Message key={index} user={2} text={text} nome={nome} hora={hora} />
                    ) : null
                ))}
            </div>
            <div className="flex w-full h-20 justify-center items-center border-t-2">
                <input
                    type="text"
                    className="border-2 w-8/12 h-10 rounded-lg p-2 border-gray-400 text-gray-500 focus:text-gray-600 focus:border-gray-600 focus:outline-none"
                />
            </div>
        </div>
    )
}

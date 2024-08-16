import Chat from "./Chat";
import Messages from "./Messages";

export default function Chats() {
    return (
        <div className="flex justify-center h-full p-10 pt-0 items-center">
            <div className="flex flex-1 h-5/6 justify-center">
                <Chat />
                <Messages />
            </div>
        </div>
    )
}
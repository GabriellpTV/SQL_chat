import Chats from "../components/chats/Chats";
import Header from "../components/Header";

export default function Home() {
    return (
        <div className="w-screen h-screen flex flex-col overflow-hidden">
            <Header className="flex-shrink-0" /> 
            <div className="flex-1 overflow-hidden">
                <Chats /> 
            </div>
        </div>
    );
}

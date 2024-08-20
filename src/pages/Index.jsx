import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Index() {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-3/5 h-2/3 flex flex-col justify-center items-center border-2 space-y-10 rounded-lg">
                <h1 className="text-6xl">SQL Chat.</h1>
                <div className="space-x-10 flex flex-nowrap">
                    <button className="border-2 border-black rounded-md p-1" onClick={() => navigate("/signup")}>Cadastrar-se</button>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => navigate("/signin")}>Logar-se</button>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </div>
        </div>
    );
}

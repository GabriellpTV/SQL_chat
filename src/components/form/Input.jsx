import React from "react";

export default function Input({ customText, value, onChange, onKeyDown }) {
    return (
        <div className="relative w-8/12 mx-auto">
            <input
                type="text"
                id={`floatingInput-${customText}`}
                className="block px-2.5 pb-2.5 pt-4 w-full text-gray-500 bg-transparent border-2 border-gray-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                value={value}
                onChange={onChange}
                placeholder=" " 
                onKeyDown={onKeyDown}
            />
            <label
                htmlFor={`floatingInput-${customText}`}
                className="absolute cursor-text text-gray-500 duration-300 transform -translate-y-6 scale-80 top-4 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-6 left-3"
            >
                {customText}
            </label>
        </div>
    );
}

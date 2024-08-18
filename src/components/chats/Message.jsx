export default function Message({ user, text, nome, hora, customClass }) {
    return (
        <div className={`border-2 rounded-lg p-2 m-2 mt-6 w-fit flex flex-col ${customClass} max-w-2xl`}>
            <div className={`text-xs text-gray-600 ${user === 1 ? 'self-end text-right pr-2 pl-2' : 'pr-2 pl-2'}`}>
                <p className="break-words">{nome}</p>
            </div>
            <div className={`text-1xl text-gray-800 ${user === 1 ? 'self-end text-right pr-2 pl-2' : 'pr-2 pl-2'} pt-1`}>
                <p className="break-words">{text}</p>
            </div>
            <div className={`text-xs text-gray-600 ${user === 1 ? 'self-end text-right  pl-2' : 'pr-2 '} pt-1`}>
                <p className="break-words">{hora}</p>
            </div>
        </div>
    )
}

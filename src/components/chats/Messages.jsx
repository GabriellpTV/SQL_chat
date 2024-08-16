export default function Messages() {
    return (
        <div className="flex flex-col w-6/12 border-2 rounded-lg"> 
            <div className="flex-1 overflow-y-auto p-2"> 
                <div>
                    {/* Adicionar as Messages */}
                </div>
            </div>
            <div className="flex w-full h-20 justify-center items-center border-t-2">
                <input type="text" className="border-2 w-8/12 h-10 rounded-lg p-2 text-gray-600" />
            </div>
        </div>
    )
}

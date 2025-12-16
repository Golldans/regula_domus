export default function Login() {
    return (
        <div className="w-screen h-screen bg-white text-black flex items-center flex-col justify-center">
            <h1 className="text-4xl font-bold mb-10">
                Regula Domus
            </h1>
            <div className="border border-black p-10 rounded-lg flex flex-col gap-5">
                <h1 className="text-2xl font-bold">Login</h1>
                <input 
                    type="text"
                    placeholder="Usuário"
                    className="border border-gray-300 p-2 rounded"
                />
                <input 
                    type="password"
                    placeholder="Senha"
                    className="border border-gray-300 p-2 rounded"
                />
                <button className="bg-black text-white p-2 rounded mt-3 cursor-pointer hover:bg-gray-800">Entrar</button>
                <span>Ainda não tem uma conta? <a href="/registrar" className="text-blue-500 hover:underline">Registrar</a></span>
            </div>
        </div>
    )
}
"use client";
import { useState } from "react"

export default function Registrar() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        const res = await fetch("http://localhost:3000/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, name }),
        });
        if (res.ok) {
            alert("Registro bem-sucedido! Agora você pode fazer login.");
            window.location.href = "/login";
        }
        else {
            alert("Falha no registro. Tente novamente.");
        }
    }

    return (
        <div className="w-screen h-screen bg-white text-black flex items-center flex-col justify-center">
            <h1 className="text-4xl font-bold mb-10">
                Regula Domus
            </h1>
            <div className="border border-black p-10 rounded-lg flex flex-col gap-5">
                <h1 className="text-2xl font-bold">Registrar</h1>
                <input
                    type="text"
                    placeholder="Nome"
                    className="border border-gray-300 p-2 rounded"
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="email"
                    placeholder="E-mail"
                    className="border border-gray-300 p-2 rounded"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    className="border border-gray-300 p-2 rounded"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirmar Senha"
                    className="border border-gray-300 p-2 rounded"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button onClick={
                    handleRegister
                } className="bg-black text-white p-2 rounded mt-3 cursor-pointer hover:bg-gray-800">Registrar</button>
            </div>
        </div>
    )
}
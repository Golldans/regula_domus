"use client";

import { useState } from "react";

export default function Login() {


    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const handeLogin = async () => {
        const res = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: usuario,
                password: senha,
            }),
        }).catch((err) => {
            console.log(err);
        });

        if (!res || !res.ok) {
            alert("Erro ao fazer login");
            return;
        }
        const data = await res.json();
        console.log(data);
        //store the id of the user in local storage
        localStorage.setItem("idUsuario", data.id);
        localStorage.setItem("nomeUsuario", data.name);
        //redirect to home page
        window.location.href = "/";
    }

    return (
        <div className="w-screen h-screen bg-white text-black flex items-center flex-col justify-center">
            <h1 className="text-4xl font-bold mb-10">
                Regula Domus
            </h1>
            <div className="border border-black p-10 rounded-lg flex flex-col gap-5">
                <h1 className="text-2xl font-bold">Login</h1>
                <input 
                    type="email"
                    placeholder="E-mail"
                    className="border border-gray-300 p-2 rounded"
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Senha"
                    className="border border-gray-300 p-2 rounded"
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button onClick={handeLogin} className="bg-black text-white p-2 rounded mt-3 cursor-pointer hover:bg-gray-800">Entrar</button>
                <span>Ainda não tem uma conta? <a href="/registrar" className="text-blue-500 hover:underline">Registrar</a></span>
            </div>
        </div>
    )
}
"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function AdicionarPage() {
    const handeSair = () => {
        localStorage.removeItem("idUsuario");
        localStorage.removeItem("nomeUsuario");
        window.location.href = "/login";
    }

    const [dueDay, setDueDay] = useState<number | null>(null);
    const [name, setName] = useState<string>("");
    const [value, setValue] = useState<number | null>(null);

    const handeEnvio = async () => {
        const response = await fetch("http://localhost:3000/billing", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                value,
                dueDay,
                userId: Number(localStorage.getItem("idUsuario")),
            }),
        });

        redirect("/");
    }

    return (
        <div className="w-screen h-screen bg-white text-black flex flex-col">
            <div className="border-black border-b-2 min-h-8 py-4 flex w-full">
                <div className="border-r-2 h-full w-1/5 border-black">
                    <h1 className="px-6">
                        Regula Domus
                    </h1>
                </div>
                <div className="flex justify-items-center w-4/5 items-end">
                    <a className="bg-gray-300 p-2 rounded ml-20" href="/adicionar">Adicionar assinatura</a>
                    <a className="bg-gray-300 p-2 rounded ml-4" onClick={handeSair}>Sair</a>
                </div>
            </div>
            <div className="flex flex-col items-center">

                {/* make a form to create billings with name, value and due day fields */}
                <h1 className="text-2xl font-bold my-5">Adicionar assinatura</h1>
                <div className="border border-black p-10 rounded-lg flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="Nome da assinatura"
                        className="border border-gray-300 p-2 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Valor da assinatura"
                        className="border border-gray-300 p-2 rounded"
                        value={value ?? ""}
                        onChange={(e) => setValue(Number(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="Dia de vencimento"
                        className="border border-gray-300 p-2 rounded"
                        max={31}
                        value={dueDay ?? ""}
                        onChange={(e) => {
                            if (Number(e.target.value) > 31) {
                                setDueDay(31);
                            } else if (Number(e.target.value) < 1) {
                                setDueDay(1);
                            } else {
                                setDueDay(Number(e.target.value));
                            }
                        }}
                    />
                    <button onClick={handeEnvio} className="bg-black text-white p-2 rounded mt-3 cursor-pointer hover:bg-gray-800">Adicionar</button>
                </div>

            </div>
        </div>
    )
}
"use client"
import { useEffect, useState } from "react";

export interface Billing {
  dueDay: number;
  value: number;
  id: number;
  name: string;
  createdAt: string;
}

export default function Home() {

  //call the backend at localhost:3000/billing

  const fetchBillings = async (): Promise<Billing[]> => {
    const res = await fetch("http://localhost:3000/billing", {
      cache: "no-store",
    });
    const data = await res.json();
    console.log(data);
    return data;
  }

  const [billings, setBillings] = useState<Billing[]>([]);

  useEffect(() => {
    fetchBillings().then(data => setBillings(data));
  }, []);

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
          <a className="bg-gray-300 p-2 rounded ml-4" href="/login">Sair</a>
        </div>
      </div>
      <div className="flex-grow p-10">
        <h1 className="text-2xl font-bold mb-5">Minhas assinaturas</h1>
        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black p-2">Nome</th>
              <th className="border border-black p-2">Valor</th>
              <th className="border border-black p-2">Dia de Vencimento</th>
              <th className="border border-black p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {billings.map((billing) => (
              <tr key={billing.id}>
                <td className="border border-black p-2">{billing.name}</td>
                <td className="border border-black p-2">R$ {billing.value}</td>
                <td className="border border-black p-2">{billing.dueDay}</td>
                <td className="border border-black p-2">
                  <button
                  onClick={() => {
                    fetch(`http://localhost:3000/billing/${billing.id}`, {
                      method: "DELETE",
                    }).then(() => {
                      setBillings(billings.filter(b => b.id !== billing.id));
                    });
                  }}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-700 cursor-pointer">
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

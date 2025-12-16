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

  const idUsuario = localStorage.getItem("idUsuario");

  if (!idUsuario) {
    window.location.href = "/login";
  }

  const fetchBillings = async (): Promise<Billing[]> => {
    const res = await fetch(`http://localhost:3000/billing/user/${idUsuario}`, {
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

  const createPayment = async (billingId: number, billingName: string, userId: number, value: number) => {
    await fetch("http://localhost:3000/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        billingName,
        billingId,
        userId,
        value,
      }),
    });

    listarPagamentos();
  }

  const [payments, setPayments] = useState([]);

  const deletarPagamento = async (paymentId: number) => {
    await fetch(`http://localhost:3000/payment/${paymentId}`, {
      method: "DELETE",
    });
    listarPagamentos();
  }

  const atualizarPagamento = async (billingId: number, value: number) => {
    await fetch(`http://localhost:3000/billing/${billingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        billingId,
        value,
      }),
    });
    listarPagamentos();
  }

  const listarPagamentos = async () => {
    const res = await fetch(`http://localhost:3000/payment/userId/${idUsuario}`, {
      cache: "no-store",
    }).catch((err) => {
      console.log(err);
    });

    if (!res || !res.ok) {
      alert("Erro ao buscar pagamentos");
      return;
    }
    const data = await res.json();
    setPayments(data);
  }

  useEffect(() => {
    listarPagamentos();
  }, []);

  const handeSair = () => {
    localStorage.removeItem("idUsuario");
    localStorage.removeItem("nomeUsuario");
    window.location.href = "/login";
  }

  return (
<div className="w-full min-h-screen bg-white text-black flex flex-col">
      <div className="border-black h-fit border-b-2 py-4 flex w-full">
        <div className="border-r-2 h-full w-1/5 border-black text-center">
            Regula Domus
        </div>
        <div className="flex justify-items-center w-4/5 items-end">
          <a className="bg-gray-300 p-2 rounded ml-20 cursor-pointer " href="/adicionar">Adicionar assinatura</a>
          <a className="bg-gray-300 p-2 rounded ml-4 cursor-pointer" onClick={handeSair}>Sair</a>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold mx-10 my-5">Olá, {localStorage.getItem("nomeUsuario")}</h1>
        <div className="flex">
          <div className="m-5 ml-10 p-5 border border-black rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-2">Gasto projetado do mês</h2>
            <p className="text-3xl">R$ {(billings.reduce((acc, billing) => Number(acc) + Number(billing.value), 0) / 100).toFixed(2)}</p>
          </div>
          <div className="m-5 ml-5 p-5 border border-black rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-2">Contas para pagar esse mês</h2>
              {/* generate a list and set names */}
            <ul className="text-lg">
              {billings.filter(billing => 
                !payments.some((payment: any) => payment.billingId === billing.id && new Date(payment.createdAt).getMonth() === new Date().getMonth())
              ).map(billing => (
                <li key={billing.id}>{billing.name}</li>
              ))}
            </ul>
          </div>
          <div className="m-5 p-5 border border-black rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-2">Valor já pago ao total</h2>
            <p className="text-3xl">R$ {
              (
                payments.reduce((acc: number, payment: any) => Number(acc) + Number(payment.value), 0) / 100
              ).toFixed(2)
              }</p>
          </div>
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
              <th className="border border-black p-2">Pago esse mês?</th>
              <th className="border border-black p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {billings.map((billing) => (
              <tr key={billing.id}>
                <td className="border border-black p-2">{billing.name}</td>
                <td className="border border-black p-2">R$ {(billing.value /100).toFixed(2)}</td>
                <td className="border border-black p-2">{billing.dueDay}</td>
                <td className="border border-black p-2">
                  {payments.some((payment: any) => payment.billingId === billing.id && new Date(payment.createdAt).getMonth() === new Date().getMonth())
                    ? "Sim"
                    : "Não"}
                </td>
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
                  <button
                    onClick={() => {
                      if (payments.some((payment: any) => payment.billingId === billing.id && new Date(payment.createdAt).getMonth() === new Date().getMonth())) {
                        const confirmar = confirm("Já existe um pagamento para essa assinatura esse mês. Deseja pagar novamente?");
                        if (confirmar) {
                          createPayment(billing.id, billing.name, Number(idUsuario), billing.value);
                        }
                      } else {
                        createPayment(billing.id, billing.name, Number(idUsuario), billing.value);
                      }
                    }}
                    className="bg-green-500 text-white p-2 rounded ml-2 hover:bg-green-700 cursor-pointer">
                    Marcar como pago
                  </button>
                  <button
                    onClick={() => {
                      const novoValor = prompt("Digite o novo valor com casa decimal em ponto:", (billing.value / 100).toString().replace(",", "."))?.replace(",", ".");
                      if (novoValor) {
                        atualizarPagamento(billing.id, Number(novoValor) * 100);
                        setBillings(billings.map(b => b.id === billing.id ? { ...b, value: Number(novoValor) * 100 } : b));
                      }
                    }}
                    className="bg-blue-500 text-white p-2 rounded ml-2 hover:bg-blue-700 cursor-pointer">
                    Atualizar valor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-10 max-w-screen mb-10">
        <h2 className="text-2xl font-bold mb-5">Pagamentos realizados</h2>
        <table className="w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black p-2">Nome da Assinatura</th>
              <th className="border border-black p-2">Data do Pagamento</th>
              <th className="border border-black p-2">Valor</th>
              <th className="border border-black p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment: any) => (
              <tr key={payment.id}>
                <td className="border border-black p-2">{payment.billingName}</td>
                <td className="border border-black p-2">{new Date(payment.createdAt).toLocaleDateString()}</td>
                <td className="border border-black p-2">R$ {(payment.value / 100).toFixed(2)}</td>
                <td className="border border-black p-2">
                  <button
                    onClick={() => deletarPagamento(payment.id)}
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

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white text-black flex flex-col">
      <div className="border-black border-b-2 min-h-8 py-4 flex w-full">
        <div className="border-r-2 h-full w-1/5 border-black">
          <h1 className="px-6">
            Regula Domus
          </h1>
        </div>
        <div className="flex justify-items-center w-4/5 items-end">
          <a className="bg-gray-300 p-2 rounded ml-20" href="/test">Adicionar assinatura</a>
          <a className="bg-gray-300 p-2 rounded ml-4" href="/login">Sair</a>
        </div>
      </div>
    </div>
  );
}

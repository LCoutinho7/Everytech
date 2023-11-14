"use client";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {

  if (sessionStorage.getItem("token-user")) {
    return (
      
      <header className="bg-009ff7 text-white shadow-lg text-center">

      <div className="mx-auto max-w-2xl flex items-center justify-center flex-col">
        <Image src="/portoLogo.png" alt="Logo da Porto Seguro" width={320} height={50}/>
        <hr className="border-azulPorto border-t-2 w-full mt-1"/>
          <nav className="menu">
           <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/login">Sobre a Solução</Link>
            </li>
            <li>
              <Link href="/login">Canais de Atendimento</Link>
            </li>
           </ul>
          </nav>
      </div>
      </header>
    );
  } else {
    return (
      <header className="bg-white text-azulPorto shadow-lg text-center shadow-custom">
        <div className="mx-auto max-w-2xl flex items-center justify-center flex-col">
        <Image src="/portoLogo.png" alt="Logo da Porto Seguro" width={100} height={90}/>
        <hr className="border-azulPorto border-t-2 w-80 mt-1"/>
        <nav className="menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/login">Sobre a Solução</Link>
            </li>
          </ul>
        </nav>
        </div>
      <button className="absolute top-0 right-0 mt-2 mr-2 bg-azulPorto-600 text-black px-4 py-2 rounded">
        <Image src="/user.png" alt="Icone de usuário" width={32} height={30}></Image>
        <Link href="/login"></Link>
      </button>
      </header>
    );
  }
}

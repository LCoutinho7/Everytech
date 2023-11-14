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
}

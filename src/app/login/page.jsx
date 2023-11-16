"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginUser() {
    // Utilizando o redirecionamento quando estamos no cliente:
    const navigate = useRouter();
  
    const [msgstatus, setMsgStatus] = useState("");
    const [classLoginMsg, setClassLoginMsg] = useState("");
  
    // Criando um useState para comportar o usuário:
    const [usuario, setUsuario] = useState({
        "info": "cadastro",
        "nome": "",
        "email": "",
        "senha": "",
        "cnh": "" // Adicionando o campo CNH
      });
    
      useEffect(() => {
        // ... Código existente
      }, [msgstatus]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("http://127.0.0.1:5000/inserir_usuario", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
          });
    
          if (response.ok) {
            const user = await response.json();
    
            if (user) {
              setMsgStatus("Cadastro realizado com SUCESSO!");
              setTimeout(() => {
                setMsgStatus("");
                router.push("/");
              }, 5000);
            } else {
              setMsgStatus("OCORREU UM ERRO!");
              setTimeout(() => {
                setMsgStatus("");
                setUsuario({
                  "info": "cadastro",
                  "email": "",
                  "senha": "",
                  "nome": "",
                  "cnh": "" // Resetando o campo CNH em caso de erro
                });
              }, 5000);
            }
          }
        } catch (error) {
          // Tratamento de erro
        }
      }
    
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="w-full max-w-xs">
            <h1 className="text-2xl font-bold mb-4 text-center">CADASTRO DE USUÁRIOS</h1>
            <h2 className={`${classLoginMsg} text-center`}>{msgstatus}</h2>
            <form onSubmit={handleSubmit}>
              <fieldset className="mb-4 p-4 border rounded">
                <legend className="text-lg font-bold mb-2">CADASTRO</legend>
                {/* Campos existentes ... */}
                <div className="mb-4">
                  <label htmlFor="idCNH" className="block text-sm font-medium">NÚMERO DA CNH:</label>
                  <input type="text" name="cnh" id="idCNH" placeholder="Digite o número da CNH:" value={usuario.cnh} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">CADASTRAR</button>
                </div>
              </fieldset>
            </form>
            <div className="text-center">
              <p>Se você já possui registro. <Link href="/login">CLIQUE AQUI</Link></p>
            </div>
          </div>
        </div>
      );
    }
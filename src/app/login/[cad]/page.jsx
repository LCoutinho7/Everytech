"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CadUser({params}) {

    //Utilizando o redirecionamento quando estamos no cliente:
    const router = useRouter();

    const [msgstatus, setMsgStatus] = useState("");
    const [classLoginMsg, setClassLoginMsg] = useState("");

    //Criando um useState para comportar o usuário:
    const [usuario, setUsuario] = useState({
        "info":"cadastro",
        "nome":"",
        "email":"",
        "senha":""
    });

    useEffect(() => {
       if(msgstatus == "Cadastro realizado com SUCESSO!"){
          setClassLoginMsg("login-suc");
        }else if(msgstatus == "OCORREU UM ERRO!"){
            setClassLoginMsg("login-err");
        }else{
            setClassLoginMsg("login");
        }
    }, [msgstatus]);
    
    //Função de preenchimento do FORM...
    const handleChange = (e)=>{
        //Destructuring
        const{name, value} = e.target;
        //Prenchendo o campo, utilizando o useState com SPREAD + OnChange:
        setUsuario({...usuario,[name]:value});
    }

    //Função de validação e ENVIO dos dados.
    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        try {
            const response = await fetch("http://127.0.0.1:5000/inserir_usuario",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:  JSON.stringify(usuario)
            });

            if(response.ok){
                const user = await response.json();

                if(user){
                    setMsgStatus("Cadastro realizado com SUCESSO!");
                    setTimeout(()=>{
                        setMsgStatus("");
                        router.push("/");
                    },5000);
                }else{
                    setMsgStatus("OCORREU UM ERRO!");
                    setTimeout(()=>{
                        setMsgStatus("");
                        setUsuario({
                            "info":"cadastro",
                            "email":"",
                            "senha":"",
                            "nome":""
                        });
                    },5000);
                }
            }
        } catch (error) {
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
                <div className="mb-4">
                  <label htmlFor="idNome" className="block text-sm font-medium">NOME:</label>
                  <input type="text" name="nome" id="idNome" placeholder="Digite o seu NOME:" value={usuario.nome} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                  <label htmlFor="idEmail" className="block text-sm font-medium">EMAIL:</label>
                  <input type="email" name="email" id="idEmail" placeholder="Digite o seu EMAIL:" value={usuario.email} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                  <label htmlFor="idSenha" className="block text-sm font-medium">SENHA:</label>
                  <input type="password" name="senha" id="idSenha" placeholder="Digite a sua SENHA:" value={usuario.senha} onChange={handleChange} className="w-full border p-2 rounded" />
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

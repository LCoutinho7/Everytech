"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginUser() {

    //Utilizando o redirecionamento quando estamos no cliente:
    const navigate = useRouter();

    const [msgstatus, setMsgStatus] = useState("");
    const [classLoginMsg, setClassLoginMsg] = useState("");

    //Criando um useState para comportar o usuário:
    const [usuario, setUsuario] = useState({
        "info":"login",
        "email":"",
        "senha":""

    });

    useEffect(() =>{
        if(msgstatus == "login realizado com SUCESSO!"){
            setClassLoginMsg("login-suc");
        }else if(msgstatus == "USUÁRIO E OU SENHA INVÁLIDOS!"){
            setClassLoginMsg("login-err");
        }else{
            setClassLoginMsg("login");
        }

    }, {msgstatus});
    
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
            const response = await fetch("http://localhost:3000/api/base/base-users/0",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:  JSON.stringify(usuario)
            });

            if(response.ok){
                const user = await response.json();

                if(user){

                    //Gerando o token do usuário:
                    const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

                    //Armazenar o token no sessionStorage:
                    sessionStorage.setItem("token-user",token);

                    setMsgStatus("Login realizado com SUCESSO!");
                    
                    setTimeout(()=>{
                        setMsgStatus("");
                        navigate.push("/");
                    },5000);
                }else{
                    setMsgStatus("USUÁRIO E OU SENHA INVÁLIDOS!");
                    setTimeout(()=>{
                        setMsgStatus("");
                        setUsuario({
                            "info":"login",
                            "email":"",
                            "senha":""
                        });
                    },5000);
                }
            }
        } catch (error) {
      }
    }

  return (
    <div>
        <h1>INFORMAÇÕES DOS USUÁRIOS</h1>

            <h2 className={classLoginMsg}>{msgstatus}</h2>

        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idEmail">EMAIL:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite o seu EMAIL:" value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">SENHA:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite a sua SENHA:" value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>LOGIN</button>
                    </div>
                    <div>
                        <p>Se você ainda não possui registro. <Link href="/login/cad">CLIQUE AQUI</Link></p>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}

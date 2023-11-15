import Image from 'next/image';
import Layout from './layout';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (


    <Layout>
      <div>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@1,700&display=swap" rel="stylesheet" />
        </Head>
      </div>

  <div className="flex flex-col items-center pt-10 justify-center">
        <h1 className="font-Barlow text-lg">Seja Bem Vindo!</h1>
        <hr className="border-azulPorto border-t-2 w-40 mt-1"/>
        <h2 className='pt-10'>Conheça nossa solução!</h2>

      {/* CHATBOT */}

    <div className="flex flex-col items-center ">
      <h1>Chatbot</h1>
      <figure className="pt-5">
        <Image src="/CHATBOT.png" alt="Chatbot Banner" width={1024} height={580} />
      </figure>
      <div className="max-w-screen-lg mx-auto mt-5 mb-8">
        <p className="mb-4">
          Uma das funcionalidades principais da nossa solução é o ChatBot, que será um dos meios que receberá a primeira interação do usuário com a Porto Seguro. Após este primeiro contato, o assegurado receberá via WhatsApp uma mensagem do nosso Bot, o qual solicitará uma série de informações, tais como:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li>Seleção de Veículo cadastrado</li>
          <li>Qual tipo de assistência é preciso</li>
          <li>Alterações do chassi (caso hajam)</li>
          <li>Informações do local de acidente para envio da ordem de serviço</li>
        </ul>
        <p className="mb-8">
          Logo após a coleta destas informações, o ChatBot pedirá imagens do veículo selecionado pelo assegurado para acionar nossa ferramenta de{' '}
          <a href="./pages/IA.html" className="text-blue-500">Inteligência Artificial</a> e deixar o usuário em espera, até que a ferramenta identifique se as informações passadas pelo cliente batem com as do sistema. Logo após, se bem sucedida a operação, é enviada uma mensagem de sucesso, indicando qual a distância do modal até o solicitante do serviço.
        </p>
      </div>

      {/* INTELIGENCIA ARTIFICIAL */}

      <h1>Inteligência Artificial</h1>
      <figure className="pt-5">
        <Image src="/IA.png" alt="Inteligência Artificial Banner" width={1024} height={580} />
      </figure>
      <div className="max-w-screen-lg mx-auto mt-5 mb-8">
        <p className="mb-4">
        O grande diferencial da nossa solução é este recurso, o qual tem a função de evitar falha humana em
            situações que há divergências de informações entre o sistema da Porto e o beneficiário do seguro.
            Essa ferramenta será capaz de comparar as imagens que são anexadas na primeira revisão do veículo, logo após
            a assinatura do contrato, com as imagens obtidas pelo ChatBot por meio do processo anterior de atendimento
            (WhatsApp).
            Após esta análise, caso não sejam equivalentes as imagens, a IA fará comparações com um banco de imagens na
            nuvem, afim de encontrar qual pode ser a alteração feita no veículo de carga. Ai que entra o papel da Integração com o Banco de Dados Porto Seguro.
        </p>
      </div>
    </div>
  </div>

    </Layout>
  )
}

import Image from 'next/image';
import Layout from './layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center pt-10 justify-center">
        <h1 className="font-barlow text-azulPorto-600">Seja Bem Vindo!</h1>
        <hr className="border-azulPorto border-t-2 w-40 mt-1"/>
        <h2 className='pt-3'>Conheça nossa solução!</h2>
      </div>
    </Layout>
  )
}

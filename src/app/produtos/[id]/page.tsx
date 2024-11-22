'use client'
import "@/app/produtos/[id]/produtos.css"
import NavProdutos from "@/components/nav-produtos/nav-produtos";
import { Suspense, Usable, use, useEffect, useState } from "react";
import Loading from "./loading";

type PageParams = {
  params: Usable<{ id: string; }> &{
    id: string;
  }
}

type IData = {
  id: string;
  nome: string;
  preco: number;
}

export default function ProdutoPage({params}: PageParams) {
  const [data, setData] = useState<IData[]>([])
  const {id}: {id: string} = use(params)
  
  const API_GET = async() => {
    const response = await fetch(`http://localhost:3000/backend/${id}`)
    setData(await response.json())
  }

  useEffect(() => {
    if (id) {
      API_GET()
    }

  }, [id])

  return (
    <main>
      <NavProdutos />
      <h1 style={{textTransform: 'uppercase'}}>{id}</h1>

      <Suspense fallback={<Loading />}>
        {data.map(({id, nome, preco}) => (
         <div key={id} >
            <h2>{nome}</h2>
            <p>R$ {preco}</p>
          </div>
        ))}
      </Suspense>
    </main>
  )
}
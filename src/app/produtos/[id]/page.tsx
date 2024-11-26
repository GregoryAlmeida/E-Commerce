'use client'
import "@/app/produtos/[id]/produtos.css"
import NavProdutos from "@/components/nav-produtos/nav-produtos";
import {Usable, use, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Loading from "./loading";

type PageParams = {
  params: Promise<{id: string }> & Usable<{id: string}>;
}

type IData = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  img: StaticImageData;
}

export default function ProdutoPage({params}: PageParams) {
  const API = 'https://e-commerce-gregory.netlify.app/'
  //const API = 'http://localhost:3000/'
  const [data, setData] = useState<IData[]>([])
  const {id}: {id: string} = use(params)
  
  const API_GET = async() => {
    const response = await fetch(`${API}backend/${id}`)
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
      <section>
          {data.length < 1 ? <Loading /> : data.map(({id, nome, preco, img}) => (
          <div className="div-produto" key={id} >
              <Image 
                className="img-produto" 
                src={img} 
                height={200} 
                alt="IMAGEM HARDWARE" 
              />
              <p>{nome}</p>
              <h2>R$ {preco}</h2>
              <button>Comprar</button>
            </div>
          ))}
      </section>

    </main>
  )
}
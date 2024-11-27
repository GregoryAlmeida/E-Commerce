'use client'
import "@/app/produtos/[rota]/produtos.css"
import NavProdutos from "@/components/nav-produtos/nav-produtos";
import {Usable, use, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Loading from "./loading";
import { redirect } from "next/navigation";

type PageParams = {
  params: Promise<{rota: string }> & Usable<{rota: string}>;
}

export type IData = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  img: StaticImageData;
}
//export const API = 'http://localhost:3000/'
export const API = 'https://e-commerce-gregory.netlify.app/'
export const currencyFormat = new Intl.NumberFormat(
  'pt-BR', {style: 'currency', currency: 'BRL'}
)

export default function ProdutoPage({params}: PageParams) {
  const [data, setData] = useState<IData[]>([])
  const {rota} = use(params)
  
  const API_GET = async() => {
    const response = await fetch(`${API}backend/${rota}`)
    setData(await response.json())
  }

  useEffect(() => {
    if (rota) {
      API_GET()
    }

  }, [rota])

  return (
    <main>
      <NavProdutos />
      <h1 style={{textTransform: 'uppercase'}}>{rota}</h1>
      <section>
          {data.length < 1 ? <Loading /> : data.map(({id, nome, preco, img}, index) => (
          <div className="div-produto" key={id} >
              <Image 
                className="img-produto" 
                src={img} 
                height={200} 
                alt="IMAGEM" 
              />
              <p>{nome}</p>
              <h2>{currencyFormat.format(preco)}</h2>
              <div className="div-btn">
                <button onClick={() => redirect(`${API}produtos/${rota}/${index}`)}>
                  Comprar
                </button>
                <button style={{backgroundColor: 'gold'}}>Carrinho</button>
              </div>
            </div>
          ))}
      </section>

    </main>
  )
}
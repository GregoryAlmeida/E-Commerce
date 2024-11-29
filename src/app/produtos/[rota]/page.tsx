'use client'
import "@/app/produtos/[rota]/produtos.css"
import NavProdutos from "@/components/nav-produtos/nav-produtos";
import {Usable, use, useEffect, useState } from "react";
import Image from "next/image";
import Loading from "./loading";
import { redirect } from "next/navigation";
import GET_API, { API, IData } from "@/app/api/api";

type PageParams = {
  params: Promise<{rota: string }> & Usable<{rota: string}>;
}

export default function ProdutoPage({params}: PageParams) {

  const currencyFormat = new Intl.NumberFormat(
    'pt-BR', {style: 'currency', currency: 'BRL'}
  )

  const [data, setData] = useState<IData[]>([])
  const {rota} = use(params)
  
  const handleData = async () => {
    setData(await GET_API(rota))
  }

  useEffect(() => {
    if (rota) {
      handleData()
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
                <button>Carrinho</button>
              </div>
            </div>
          ))}
      </section>

    </main>
  )
}
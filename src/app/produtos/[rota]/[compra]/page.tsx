'use client'
import { Usable, use, useEffect, useState } from "react";
import {IData } from "../page";
import Image from "next/image";
import Loading from "../loading";
import '@/app/produtos/[rota]/[compra]/compra.css'
import NavProdutos from "@/components/nav-produtos/nav-produtos";

type PageParams = {
  params: Promise<{
    rota: string, compra: number 
  }> & 
  Usable<{
    rota: string, compra: number
  }>;
}
export default function CompraPage({params} : PageParams) {
  //const API = 'http://localhost:3000/'
  const API = 'https://e-commerce-gregory.netlify.app/'

  const currencyFormat = new Intl.NumberFormat(
    'pt-BR', {style: 'currency', currency: 'BRL'}
  )

  const [dataCompra, setDataCompra] = useState<IData | null>(null)
  const {rota, compra} = use(params)

  const GET_COMPRA = async () => {
    const response = await fetch(`${API}backend/${rota}`)
    const data = await response.json() as IData[]
    setDataCompra(data[compra])
  } 

  useEffect(() => {
    GET_COMPRA()
  }, [])

  return (
    <main className="main-compra">
      <NavProdutos />
      {!dataCompra ? <Loading /> : (
        <>
          <h1>{dataCompra.nome}</h1>
          <section>
            <Image src={dataCompra.img} alt="Imagem do Produto!" />
            <div>
              <h1>{currencyFormat.format(dataCompra.preco)}</h1>
              <p>{dataCompra.quantidade} Em estoque</p>
              <button>Comprar</button>
              <button style={{backgroundColor: 'gold'}}>Carrinho</button>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
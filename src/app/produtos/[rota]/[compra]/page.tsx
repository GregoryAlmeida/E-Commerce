'use client'
import { Usable, use, useEffect, useState } from "react";
import { API, currencyFormat, IData } from "../page";
import Image from "next/image";
import Loading from "../loading";
import '@/app/produtos/[rota]/[compra]/compra.css'

type PageParams = {
  params: Promise<{rota: string, compra: number }> & Usable<{rota: string, compra: number}>;
}
export default function CompraPage({params} : PageParams) {
  const [dataCompra, setDataCompra] = useState<IData | null>(null)
  const {rota, compra} = use(params)

  const GET_COMPRA = async () => {
    const response = await fetch(API + 'backend/' + rota)
    const data = await response.json() as IData[]
    setDataCompra(data[compra])
  } 

  useEffect(() => {
    GET_COMPRA()
  }, [])

  return (
    <main className="main-compra">
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
'use client'
import { Usable, use, useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../loading";
import '@/app/produtos/[rota]/[compra]/compra.css'
import NavProdutos from "@/components/nav-produtos/nav-produtos";
import GET_API, { IData } from "@/app/api/api";
import { redirect } from "next/navigation";

type PageParams = {
  params: Promise<{
    rota: string, compra: number 
  }> & 
  Usable<{
    rota: string, compra: number
  }>;
}
export default function CompraPage({params} : PageParams) {
  const currencyFormat = new Intl.NumberFormat(
    'pt-BR', {style: 'currency', currency: 'BRL'}
  )

  const [dataCompra, setDataCompra] = useState<IData | null>(null)
  const {rota, compra} = use(params)

  const GET_COMPRA = async () => {
    const data = await GET_API(rota)
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
              <p>{dataCompra.quantidade} em estoque</p>
              <button onClick={() => redirect('/carrinho')}>Comprar</button>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
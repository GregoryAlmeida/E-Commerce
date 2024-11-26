import React from 'react'
import '@/components/nav-produtos/nav-produtos.css'
import Link from 'next/link'

export default function NavProdutos() {
  return (
      <nav className='navprodutos'>
          <Link href='/produtos/hardware'>Hardware <div className='loader-nav'></div></Link>
          <Link href='/produtos/perifericos'>Periféricos <div className='loader-nav'></div></Link>
          <Link href='/produtos/computadores'>Computadores <div className='loader-nav'></div></Link>
          <Link href='/produtos/audio'>Áudio <div className='loader-nav'></div></Link>
      </nav> 
  )
}

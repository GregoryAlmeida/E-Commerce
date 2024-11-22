import React from 'react'
import '@/components/nav-produtos/nav-produtos.css'
import Link from 'next/link'

export default function NavProdutos() {
  return (
      <nav className='navprodutos'>
        <Link href='/produtos/hardware'>Hardware</Link>
        <Link href='/produtos/perifericos'>Periféricos</Link>
        <Link href='/produtos/computadores'>Computadores</Link>
        <Link href='/produtos/audio'>Áudio</Link>
      </nav> 
  )
}

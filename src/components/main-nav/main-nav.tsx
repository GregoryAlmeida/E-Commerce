import Link from "next/link";
import '@/components/main-nav/main-nav.css'

export default function Menu() {
  return (
    <nav className="main-nav">
      <Link href="/" >Home</Link>
      <Link href='/login'>Login</Link>
      <Link href='/carrinho'>Carrinho</Link>
    </nav>
  )
}

'use client'
import Input from "@/components/input/input";
import { FormEvent } from "react";
import '@/app/login/login.css'

export default function LoginPage() {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input label="Usuário" id="user" type="text" />
        <Input label="Senha" id="pass" type="password" />
        <button>Entrar</button>
        <p>login: user | Senha: 1234</p>
      </form>
    </main>
  )
}

'use client'
import Input from "@/components/input/input";
import '@/app/login/login.css'
import LoginValidate from "@/components/login-validate/login-validade";
import { useActionState } from "react";

export default function LoginPage() {
  const [state, formAction] = useActionState(LoginValidate, {
    errors: [],
  })
  
  return (
    <main>
      <form action={formAction}>
        <h1>Login</h1>
        <Input 
          label="Usuário" 
          border={state.errors.length < 1 ? '#00a8ff' : 'red'} 
          id="user" 
          type="text" 
          required
        />
        <Input 
          label="Senha" 
          border={state.errors.length < 1 ? '#00a8ff' : 'red'}
          id="pass" 
          type="password"
          required
        />
        <button type="submit">Entrar</button>
        <p>login: user | Senha: 1234</p>
        {state.errors.length > 0 && <p style={{ color: 'red' }}>{state.errors}</p>}
      </form>
    </main>
  )
}

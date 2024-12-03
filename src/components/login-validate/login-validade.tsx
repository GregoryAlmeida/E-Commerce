import { redirect } from "next/navigation"

export default function LoginValidate (state: {errors: string[]}, formData: FormData) {
  const login = {
    user: formData.get('user') as string,
    pass: formData.get('pass') as string,
  }

  if (login.user.trim() === '' && login.pass.trim() === '') return {
    errors: ['Por favor preencha os campos válidos!']
  }
  if (login.user.trim() !='user' || login.pass.trim() != '1234') return {
    errors: ['Usuário ou Senha inválido!']
  }
  
  redirect('/login/cadastrar')
  //return {errors: []}
}
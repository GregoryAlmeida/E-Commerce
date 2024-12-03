import Input from "@/components/input/input";

export default function CadastrarPage() {
  return (
    <main>
      <h1>Cadastrar produto novo</h1>
      <form action="">
        <Input label="Nome" id="nome" type="text" />
        <Input label="Preço" id="preco" type="number" />
        <Input label="Estoque" id="estoque" type="number" />
        <button type="submit" >Cadastrar</button>
      </form>
    </main>
  )
}
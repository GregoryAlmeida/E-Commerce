export async function GET() {
  return Response.json([
    {
      id: crypto.randomUUID(),
      nome: 'Teclado mecanico',
      preco: 250,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Mouse Logitec',
      preco: 200,
    }
  ])
}
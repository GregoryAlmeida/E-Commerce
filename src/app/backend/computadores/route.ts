export async function GET() {
  return Response.json([
    {
      id: crypto.randomUUID(),
      nome: 'Computador Dell',
      preco: 2300,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Computador Positivo',
      preco: 2500,
    }
  ])
}
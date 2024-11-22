export async function GET() {
  return Response.json([
    {
      id: crypto.randomUUID(),
      nome: 'Fone Stinger',
      preco: 250,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Caixa de som JBL',
      preco: 400,
    },
  ])
}
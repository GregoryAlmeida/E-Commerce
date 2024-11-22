export async function GET() {
  return Response.json([
    {
      id: crypto.randomUUID(),
      nome: 'Placa de video',
      preco: 2500,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Placa mãe',
      preco: 500,
    }
  ])
}
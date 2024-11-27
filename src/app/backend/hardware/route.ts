import HARDWARE1 from '@/app/backend/hardware/img/hardware1.jpg'

export async function GET() {
  return Response.json([
    {
      id: crypto.randomUUID(),
      nome: 'Placa de Video RTX 4060',
      preco: 2159.99,
      quantidade: 56,
      img: HARDWARE1,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Placa de Video RTX 4060',
      preco: 2159.99,
      quantidade: 56,
      img: HARDWARE1,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Placa de Video RTX 4060',
      preco: 2159.99,
      quantidade: 56,
      img: HARDWARE1,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Placa de Video RTX 4060',
      preco: 2159.99,
      quantidade: 56,
      img: HARDWARE1,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Placa de Video RTX 4060',
      preco: 2159.99,
      quantidade: 56,
      img: HARDWARE1,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Placa de Video RTX 4060',
      preco: 2159.99,
      quantidade: 56,
      img: HARDWARE1,
    },
    
  ])
}
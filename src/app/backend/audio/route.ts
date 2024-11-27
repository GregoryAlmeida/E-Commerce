import AUDIO1 from '@/app/backend/audio/img/audio1.jpg'

export async function GET() {
  return Response.json([
    {
      id: crypto.randomUUID(),
      nome: 'Fone Stinger HyperX',
      preco: 239.99,
      quantidade: 206,
      img: AUDIO1,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Fone Stinger HyperX',
      preco: 239.99,
      quantidade: 206,
      img: AUDIO1,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Fone Stinger HyperX',
      preco: 239.99,
      quantidade: 206,
      img: AUDIO1,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Fone Stinger HyperX',
      preco: 239.99,
      quantidade: 206,
      img: AUDIO1,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Fone Stinger HyperX',
      preco: 239.99,
      quantidade: 206,
      img: AUDIO1,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Fone Stinger HyperX',
      preco: 239.99,
      quantidade: 206,
      img: AUDIO1,
    },
  ])
}
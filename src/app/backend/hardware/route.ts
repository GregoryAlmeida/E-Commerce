import HARDWARE1 from '@/app/backend/hardware/img/hardware1.jpg'
import HARDWARE2 from '@/app/backend/hardware/img/hardware2.webp'
import HARDWARE3 from '@/app/backend/hardware/img/hardware3.png'

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
      nome: 'Processador AMD Ryzen 5 5600GT, 3.6 GHz, (4.6GHz Max Turbo), Cachê 4MB, 6 Núcleos, 12 Threads, AM4 - 100-100001488BOX',
      preco: 934.99,
      quantidade: 56,
      img: HARDWARE2,
    },
    {
      id: crypto.randomUUID(),
      nome: 'Memória RAM Kingston Fury Beast, RGB, 32GB (2x16GB), 6000MHz, DDR5, CL40, Preto - KF560C40BBAK2-32',
      preco: 1559.00,
      quantidade: 56,
      img: HARDWARE3,
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
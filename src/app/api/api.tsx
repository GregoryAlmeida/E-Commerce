import { StaticImageData } from 'next/image';

export type IData = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  img: StaticImageData;
}

export const API = 'http://localhost:3000/'
//export const API = 'https://e-commerce-gregory.netlify.app/'

export default async function GET_API(rota: string, ) {
  const response = await fetch(`${API}backend/${rota}`)
  const data = await response.json() as IData[]
  return data
}

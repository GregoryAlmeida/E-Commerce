'use client'
import HARDWARE from "@/app/fonts/img/hardware.jpg"
import PERIFERICOS from "@/app/fonts/img/perifericos.jpg"
import COMPUTADORES from '@/app/fonts/img/computadores.webp'
import AUDIO from '@/app/fonts/img/audio.jpg'
import '@/app/home.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <main className='main'>
      <section>
        <div>
          <Link href="/produtos/hardware">
            <h1>Hardware</h1>
            <Image 
              src={HARDWARE}
              width={200}
              height={200}
              style={{borderRadius: '5px'}}
              alt="Hardware"
            />
          </Link>
        </div>
        <div>
          <Link href="/produtos/perifericos">
            <h1>Periféricos</h1>
            <Image 
              src={PERIFERICOS}
              width={200}
              height={200}
              style={{borderRadius: '5px'}}
              alt="Hardware"
            />
          </Link>
        </div>
      </section>
      <section>
        <div>
          <Link href="/produtos/computadores">
            <h1>Computadores</h1>
            <Image 
              src={COMPUTADORES}
              width={200}
              height={200}
              style={{borderRadius: '5px'}}
              alt="Hardware"
            />
          </Link>
        </div>
        <div>
          <Link href="/produtos/audio">
            <h1>Áudio</h1>
            <Image 
              src={AUDIO}
              width={200}
              height={200}
              style={{borderRadius: '5px'}}
              alt="Hardware"
            />
          </Link>
        </div>
      </section>
      <section>
    <Splide className='splide'>
      <SplideSlide className='slide1'>
        <Image src={AUDIO} alt=""/>
      </SplideSlide>
      <SplideSlide>
        <Image src={HARDWARE} alt="Hardware" />
      </SplideSlide>
      <SplideSlide>
        <Image src={COMPUTADORES} alt="Computadore" />
      </SplideSlide>
      <SplideSlide>
        <Image src={PERIFERICOS} alt="Perifericos" />
      </SplideSlide>
    </Splide>
      </section>
    </main>
  );
}

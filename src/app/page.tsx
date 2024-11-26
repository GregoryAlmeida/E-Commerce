'use client'
import HARDWARE from "@/app/fonts/img/hardware.jpg"
import PERIFERICOS from "@/app/fonts/img/perifericos.jpg"
import COMPUTADORES from '@/app/fonts/img/computadores.webp'
import AUDIO from '@/app/fonts/img/audio.jpg'
import SLIDE1 from '@/app/fonts/img/slide1.webp'
import SLIDE2 from '@/app/fonts/img/slide2.avif'
import SLIDE3 from '@/app/fonts/img/slide3.webp'
import SLIDE4 from '@/app/fonts/img/slide4.jpg'
import OFERTA1 from '@/app/fonts/img/memoriaramoferta.png'
import OFERTA2 from '@/app/fonts/img/processadoroferta.webp'
import Image from "next/image";
import Link from 'next/link'
import '@/app/home.css'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
export default function Home() {
  return (
    <main className='main'>
      <section className="section-main">
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
      <section className="section-main">
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
        <Splide className="splide">
          <SplideSlide>
            <Image src={SLIDE1} alt="slide 1" />
          </SplideSlide>
          <SplideSlide>
            <Image src={SLIDE2} alt="slide 2" />
          </SplideSlide>
          <SplideSlide>
            <Image src={SLIDE3} alt="slide 3" />
          </SplideSlide>
          <SplideSlide>
            <Image src={SLIDE4} alt="slide 4" />
          </SplideSlide>
        </Splide>
      </section>
      <section className="section-ofertas">
        <div><h1>⭐OFERTAS ESPECIAIS⭐</h1></div>
        <div className="produtos-ofertas">
          <span>
            <h3>Processador AMD Ryzen 5 5600GT, 3.6 GHz, (4.6GHz Max Turbo), Cachê 4MB, 6 Núcleos, 12 Threads, AM4 - 100-100001488BOX
            </h3>
            <Image src={OFERTA2} alt="Memória RAM Kingston Fury Beast, RGB, 32GB (2x16GB), 6000MHz, DDR5, CL40, Preto - KF560C40BBAK2-32" />
            <p>R$ 934,99 <strong>-20%</strong></p>
            <button>Comprar</button>
          </span>
          <span>
            <h3>Memória RAM Kingston Fury Beast, RGB, 32GB (2x16GB), 6000MHz, DDR5, CL40, Preto - KF560C40BBAK2-32
            </h3>
            <Image src={OFERTA1} alt="Memória RAM Kingston Fury Beast, RGB, 32GB (2x16GB), 6000MHz, DDR5, CL40, Preto - KF560C40BBAK2-32" />
            <p>R$ 1,559 <strong>-26%</strong></p>
            <button>Comprar</button>
          </span>
        </div>
      </section>
    </main>
  );
}

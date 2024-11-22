import HARDWARE from "@/app/fonts/img/hardware.jpg"
import '@/app/home.css'
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
          </Link>
        </div>
      </section>
      <section>
        <div>
          <Link href="/produtos/computadores">
            <h1>Computadores</h1>
          </Link>
        </div>
        <div>
          <Link href="/produtos/audio">
            <h1>Áudio</h1>
          </Link>
        </div>
      </section>
    </main>
  );
}

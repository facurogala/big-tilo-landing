import Image from 'next/image'
import { Button } from '../components/ui/button'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gB7DVCxPqhZRiA0f9ZKWJhQBeHkSGQ.png"
          alt="Powerlifter preparándose para un levantamiento"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50">
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
      <div className="relative z-10 text-center space-y-6 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          El Jedi del <span className="text-yellow-400">Powerlifting</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
          Que la fuerza te acompañe en cada levantamiento
        </p>
        <Button variant="default" size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
          Inicia tu Entrenamiento <ChevronRight className="ml-2" />
        </Button>
      </div>
    </section>
  )
}


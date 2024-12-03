import Image from 'next/image'

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black/70 to-gray-900 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden">
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uFW1qMG3FRYtBbjHTTDmaP7LUM8Q9d.png"
              alt="Big Tilo realizando un squat durante una competencia de powerlifting"
              layout="fill"
              objectFit="cover"
              className="about-image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60"></div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-10 md:p-12 relative">
            <h2 className="text-4xl font-bold mb-6 text-white">Sobre Mí</h2>
            <div className="space-y-4 text-lg text-white">
              <p>
                Hola, mi nombre es Franco Jose Leo Menazzi AKA "Big Tilo". Soy el powerlifter más fuerte de la historia en Argentina. 
                Cuento con mayoría de los records en las categorias SHW de las 6 federaciones que hay en el país.
              </p>
              <p>
                A través de esta página vas a conocer un poco más de mí, como mis logros, mi vida deportiva y los sponsors que me ayudan a seguir dedicándome a esto.
                También vas a poder entrenar conmigo, donde vas a poder lograr mejorar en tus básicos con ayuda 1 a 1 hablando conmigo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


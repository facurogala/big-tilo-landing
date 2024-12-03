import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"
import YouTubeIcon from './components/YouTubeIcon'
import InstagramIcon from './components/InstagramIcon'
import SteamIcon from './components/SteamIcon'
import OpenPowerliftingIcon from './components/OpenPowerliftingIcon'

// YouTube video IDs
const videos = [
  "9eb0OMhEciU",
  "AQzmKP7TCxI",
  "eL9KGDLaD0I",
  "LmhGkOSXk_Y"
]

export default function LandingPage() {
  const [currentVideo, setCurrentVideo] = useState(0)

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gB7DVCxPqhZRiA0f9ZKWJhQBeHkSGQ.png"
            alt="Powerlifter preparándose para un levantamiento"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            El Jedi del <span className="text-yellow-400">Powerlifting</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Que la fuerza te acompañe en cada levantamiento
          </p>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6">
            Inicia tu Entrenamiento <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <Card className="bg-gray-800/20 border-white backdrop-blur-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Sobre Mí</h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto text-white">
                Hola, mi nombre es Franco Jose Leo Menazzi AKA "Big Tilo". Soy el powerlifter más fuerte de la historia en Argentina. 
                Cuento con mayoría de los records en las categorias SHW de las 6 federaciones que hay en el país.
              </p>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4 text-white">
                A través de esta página vas a conocer un poco más de mí, como mis logros, mi vida deportiva y los sponsors que me ayudan a seguir dedicándome a esto.
                También vas a poder entrenar conmigo, donde vas a poder lograr mejorar en tus básicos con ayuda 1 a 1 hablando conmigo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Logros y Records</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/20 border-white backdrop-blur-xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">2024</h3>
                <ul className="space-y-2 text-white list-disc list-inside">
                  <li>Campeón Nacional FALPo Open +120kg</li>
                  <li>Records SQ, BP, DL y Total</li>
                  <li>Campeón Metropolitano 2024</li>
                  <li>Records SQ, BP, DL y Total</li>
                  <li>Mejor coeficiente Masculino Metropolitano 2024</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/20 border-white backdrop-blur-xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">2023</h3>
                <ul className="space-y-2 text-white list-disc list-inside">
                  <li>Campeón Nacional AAP y Campeón de Campeones 2023</li>
                  <li>Sleeves Open +140kg</li>
                  <li>Records SQ, BP, DL y Total</li>
                  <li>Campeón Mundial GPA y Campeón de campeones 2023</li>
                  <li>Record Mundial 361 kg de Peso Muerto</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/20 border-white backdrop-blur-xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">2022</h3>
                <ul className="space-y-2 text-white list-disc list-inside">
                  <li>Campeón Nacional APL</li>
                  <li>Records SQ, DL y Total</li>
                  <li>Campeón Iberoamericano IPL Open +140kg</li>
                  <li>Campeón Nacional APUA en Especialista</li>
                  <li>350.5kg de Peso Muerto (Peso muerto más pesado en la Federación)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/20 border-white backdrop-blur-xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">2021</h3>
                <ul className="space-y-2 text-white list-disc list-inside">
                  <li>Campeón Nacional APUA</li>
                  <li>Push Pull más pesado de Argentina en la Historia (525 kg)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-gray-800/20 border-white backdrop-blur-xl shadow-lg mt-6">
            <CardContent className="p-6 text-center">
              <p className="text-xl font-bold text-white">
                Total más pesado en la historia del deporte en Argentina entre las categorias Raw y Classic (963 kg)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Videos Destacados</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videos[currentVideo]}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <Button onClick={prevVideo} variant="outline" size="icon" className="bg-gray-800/50 border-white">
                <ArrowLeft className="text-white" />
              </Button>
              <Button onClick={nextVideo} variant="outline" size="icon" className="bg-gray-800/50 border-white">
                <ArrowRight className="text-white" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Sígueme en Redes</h2>
          <div className="flex justify-center gap-8">
            <a
              href="https://steamcommunity.com/profiles/76561198440658526/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-gray-800/20 border-white backdrop-blur-xl shadow-lg group-hover:bg-gray-800/40 transition-all duration-300">
                <CardContent className="p-6">
                  <SteamIcon className="w-12 h-12 text-white" />
                </CardContent>
              </Card>
            </a>
            <a
              href="https://www.instagram.com/stories/bigtilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-gray-800/20 border-white backdrop-blur-xl shadow-lg group-hover:bg-gray-800/40 transition-all duration-300">
                <CardContent className="p-6">
                  <InstagramIcon className="w-12 h-12" />
                </CardContent>
              </Card>
            </a>
            <a
              href="https://www.youtube.com/@VladimirEzequiel"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-gray-800/20 border-white backdrop-blur-xl shadow-lg group-hover:bg-gray-800/40 transition-all duration-300">
                <CardContent className="p-6">
                  <YouTubeIcon className="w-12 h-12" />
                </CardContent>
              </Card>
            </a>
            <a
              href="https://www.openpowerlifting.org/u/francojoseleomenazzi"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-gray-800/20 border-white backdrop-blur-xl shadow-lg group-hover:bg-gray-800/40 transition-all duration-300">
                <CardContent className="p-6">
                  <OpenPowerliftingIcon className="w-12 h-12" />
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Big Tilo - Franco Jose Leo Menazzi. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}


import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import Link from 'next/link'

export default function Sponsors() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Sponsors y Colaboradores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SponsorCard 
            name="Full Power OK"
            description="Equipamiento de powerlifting de primera calidad"
            website="https://www.fullpowerok.com.ar"
            discountCode="Tilo"
            discountAmount="10%"
          />
          <SponsorCard 
            name="Gorila Mode"
            description="The Best Fitness Brand"
            website="https://www.gorilamode.com"
            discountCode="BigTilo"
            discountAmount="10%"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

function SponsorCard({ name, description, website, discountCode, discountAmount }) {
  return (
    <Card className="bg-gray-800/20 border-white backdrop-blur-xl shadow-lg">
      <CardContent className="p-6 flex flex-col items-center text-center">
        {name === "Full Power OK" ? (
          <h3 className="text-2xl font-bold mb-2 text-[#A9198E]">{name}</h3>
        ) : (
          <h3 className="text-2xl font-bold mb-2 text-yellow-400">{name}</h3>
        )}
        <p className="text-white mb-4">{description}</p>
        <p className="text-white mb-4">Usa el código <span className="font-bold text-yellow-400">{discountCode}</span> para obtener un {discountAmount} de descuento</p>
        <Link href={website} target="_blank" rel="noopener noreferrer">
          {name === "Full Power OK" ? (
            <Button variant="outline" className="border-[#A9198E] bg-[#A9198E] text-white hover:bg-[#8a147a] hover:border-[#8a147a] font-medium transition-colors">
              Visitar Sitio
            </Button>
          ) : (
            <Button variant="outline" className="border-yellow-400 bg-yellow-400 text-gray-900 hover:bg-yellow-500 hover:border-yellow-500 font-medium transition-colors">
              Visitar Sitio
            </Button>
          )}
        </Link>
      </CardContent>
    </Card>
  )
}


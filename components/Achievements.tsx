import Image from 'next/image'
import { Card, CardContent } from '../components/ui/card'

export default function Achievements() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21290c3f-3080-4352-8bae-2d3b425f9c0d.jpg-VndcMNpTu6E2JckgGuqi7SaURkUrVn.jpeg"
          alt="Big Tilo sonriendo después de una competencia de powerlifting"
          width={1920}
          height={1080}
          className="w-full h-[1500px] object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-transparent to-black"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-yellow-400 drop-shadow-lg">Logros y Records</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AchievementCard year="2024" achievements={[
              "Campeón Nacional FALPo Open +120kg",
              "Records SQ, BP, DL y Total",
              "Campeón Metropolitano 2024",
              "Records SQ, BP, DL y Total",
              "Mejor coeficiente Masculino Metropolitano 2024"
            ]} />
            <AchievementCard year="2023" achievements={[
              "Campeón Nacional AAP y Campeón de Campeones 2023",
              "Sleeves Open +140kg",
              "Records SQ, BP, DL y Total",
              "Campeón Mundial GPA y Campeón de campeones 2023",
              "Record Mundial 361 kg de Peso Muerto"
            ]} />
            <AchievementCard year="2022" achievements={[
              "Campeón Nacional APL",
              "Records SQ, DL y Total",
              "Campeón Iberoamericano IPL Open +140kg",
              "Campeón Nacional APUA en Especialista",
              "350.5kg de Peso Muerto (Peso muerto más pesado en la Federación)"
            ]} />
            <AchievementCard year="2021" achievements={[
              "Campeón Nacional APUA",
              "Push Pull más pesado de Argentina en la Historia (525 kg)"
            ]} />
          </div>
          <Card className="bg-black/70 border-yellow-400/30 shadow-lg mt-8">
            <CardContent className="p-6 text-center">
              <p className="text-xl font-bold text-yellow-400">
                Total más pesado en la historia del deporte en Argentina entre las categorias Raw y Classic (963 kg)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function AchievementCard({ year, achievements }: { year: string, achievements: string[] }) {
  return (
    <Card className="bg-black/80 border-yellow-400/30 shadow-lg backdrop-blur-sm">
      <CardContent className="p-6">
        <h3 className="text-3xl font-bold mb-4 text-yellow-400">{year}</h3>
        <ul className="space-y-2 text-gray-200 list-disc list-inside">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}


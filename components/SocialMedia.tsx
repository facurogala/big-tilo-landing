import { Card, CardContent } from '../components/ui/card'
import YouTubeIcon from './YouTubeIcon'
import InstagramIcon from './InstagramIcon'
import SteamIcon from './SteamIcon'
import OpenPowerliftingIcon from './OpenPowerliftingIcon'

export default function SocialMedia() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Sígueme en Redes</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          <SocialLink href="https://steamcommunity.com/profiles/76561198440658526/" icon={<SteamIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />} />
          <SocialLink href="https://www.instagram.com/stories/bigtilo/" icon={<InstagramIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />} />
          <SocialLink href="https://www.youtube.com/@VladimirEzequiel" icon={<YouTubeIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />} />
          <SocialLink href="https://www.openpowerlifting.org/u/francojoseleomenazzi" icon={<OpenPowerliftingIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />} />
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <Card className="bg-gray-900/80 border-white border-2 backdrop-blur-xl shadow-lg group-hover:bg-gray-800/60 transition-all duration-300">
        <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
          {icon}
        </CardContent>
      </Card>
    </a>
  )
}


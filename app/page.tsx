import Hero from '../components/Hero'
import About from '../components/About'
import Achievements from '../components/Achievements'
import VideoGallery from '../components/VideoGallery'
import Sponsors from '../components/Sponsors'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Achievements />
      <VideoGallery />
      <Sponsors />
      <SocialMedia />
      <Footer />
    </main>
  )
}


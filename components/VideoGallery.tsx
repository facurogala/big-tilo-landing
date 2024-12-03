'use client'

import { useState } from "react"
import { Button } from "../components/ui/button"
import { ArrowLeft, ArrowRight } from 'lucide-react'

const videos = [
  "9eb0OMhEciU",
  "AQzmKP7TCxI",
  "eL9KGDLaD0I",
  "LmhGkOSXk_Y"
]

export default function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState(0)

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
  }

  return (
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
  )
}


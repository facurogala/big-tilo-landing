import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Big Tilo - El Jedi del Powerlifting',
  description: 'Que la fuerza te acompañe en cada levantamiento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>{children}</body>
    </html>
  )
}


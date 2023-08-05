import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

const nunito_Sans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emciar - All Talents Found & Connected',
  description: 'Emciar is a comprehensive platform that connects and showcases all talents, providing a hub for discovering and nurturing creative individuals worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={nunito_Sans.className}>{children}</body>
    </html>
  )
}

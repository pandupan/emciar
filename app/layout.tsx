import './globals.css'
import React, {useState, useEffect} from 'react'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import LoadingWrapper from '@/components/layout/LoadingWrapper'

const nunito_Sans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emciar - All Talents Found & Connected',
  description: 'Emciar is innately talented at connecting talents and clients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="id">
      <body className={nunito_Sans.className}>
        <LoadingWrapper>
          <div className="overflow-x-hidden">
            <Navbar/>
              {children}
            <Footer/> 
          </div>  
        </LoadingWrapper>
      </body>
    </html>
  )
}

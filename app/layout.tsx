'use client'

import './globals.css'
import React, {useState, useEffect} from 'react'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

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

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  },[])

  return (
    <html lang="id">
      <>
        <body className={nunito_Sans.className}>
          { 
            loading ? 
                <div className='flex justify-center items-center w-full h-[100vh] bg-slate-100'>
                  <Image
                    src="/images/emciar-logo.png"
                    width={200}
                    height={200}
                    alt="Emciar Logo"
                  />
                </div>
              :
                <div className="overflow-x-hidden">
                  <Navbar/>
                    {children}
                  <Footer/> 
                </div>  
          }
        </body>
      </>
    </html>
  )
}

'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  },[])


  return loading ? (
    <div className='flex justify-center items-center w-full h-[100vh] bg-slate-100'>
      <Image
        src="/images/emciar-logo.png"
        width={200}
        height={200}
        alt="Emciar Logo"
      />
    </div>
  ) : children
}

export default LoadingWrapper
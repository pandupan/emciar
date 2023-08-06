import Image from 'next/image'
import Hiring from '../components/pages/landing-page/Hiring'
import Why from '@/components/pages/landing-page/Why'
export default function Home() {
  return (
    <>
      Hero Section
      <Hiring/>
      <Why/>
    </>
  )
}

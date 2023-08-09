import Hiring from '../components/pages/landing-page/Hiring'
import Why from '@/components/pages/landing-page/Why'
import Hero from '@/components/pages/landing-page/Hero'
import About from '@/components/pages/landing-page/About'
import Consul from '@/components/pages/landing-page/Consul'

export default function Home() {
  return (
    <>
      <Hero/>
      <Hiring/>
      <Why/>
      <About/>
      <Consul/>
    </>
  )
}

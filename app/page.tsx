import Hiring from '../components/pages/landing-page/Hiring'
import Why from '@/components/pages/landing-page/Why'
import Hero from '@/components/pages/landing-page/Hero'
import About from '@/components/pages/landing-page/About'
import Consultant from '@/components/pages/landing-page/consultant'
export default function Home() {
  return (
    <>
      <Hero/>
      <Hiring/>
      <Why/>
      <About/>
      <Consultant/>
    </>
  )
}

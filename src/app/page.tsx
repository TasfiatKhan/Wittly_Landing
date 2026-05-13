import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TickerSection from '@/components/sections/TickerSection'
import ProblemSection from '@/components/sections/ProblemSection'
import ModesSection from '@/components/sections/ModesSection'
import ScenarioSection from '@/components/sections/ScenarioSection'
import DifferentiatorSection from '@/components/sections/DifferentiatorSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import WaitlistSection from '@/components/sections/WaitlistSection'

function Divider() {
  return <div className="section-divider" aria-hidden="true" />
}

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TickerSection />
      <ProblemSection />
      <Divider />
      <ModesSection />
      <Divider />
      <ScenarioSection />
      <Divider />
      <DifferentiatorSection />
      <Divider />
      <TestimonialsSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TickerSection from '@/components/sections/TickerSection'
import ProblemSection from '@/components/sections/ProblemSection'
import MissionSection from '@/components/sections/MissionSection'
import ModesSection from '@/components/sections/ModesSection'
import MidCtaSection from '@/components/sections/MidCtaSection'
import AdaptabilitySection from '@/components/sections/AdaptabilitySection'
import ScenarioSection from '@/components/sections/ScenarioSection'
import DifferentiatorSection from '@/components/sections/DifferentiatorSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import DownloadSection from '@/components/sections/DownloadSection'

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
      <MissionSection />
      <Divider />
      <ModesSection />
      <MidCtaSection />
      <Divider />
      <AdaptabilitySection />
      <Divider />
      <ScenarioSection />
      <Divider />
      <DifferentiatorSection />
      <Divider />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}

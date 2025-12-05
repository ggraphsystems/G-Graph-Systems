import { Hero } from '@/app/components/hero'
import { Services } from '@/app/components/services'
import { About } from '@/app/components/about'
import { TechStack } from '@/app/components/tech-stack'
import { CTA } from '@/app/components/cta'
import { Footer } from '@/app/components/footer'
import { Navigation } from '@/app/components/navigation'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <TechStack />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}

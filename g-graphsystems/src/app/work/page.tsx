import { Navigation } from "@/app/components/navigation"
import { Footer } from "@/app/components/footer"
import { Portfolio } from "@/app/components/portfolio"

export default function WorkPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Portfolio />
      <Footer />
    </main>
  )
}

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/app/components/navigation"
import { Footer } from "@/app/components/footer"
import { Database, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function DataEngineeringPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Database className="w-7 h-7 text-primary" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-balance">Data Engineering</h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Design and implementation of robust data pipelines, warehouses, and analytics platforms. We transform
                raw data into actionable insights with scalable, reliable data infrastructure.
              </p>
              <Link href="/contact">
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Data Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "ETL Pipelines", desc: "Automated data extraction, transformation, and loading" },
                { name: "Data Warehousing", desc: "Scalable storage solutions for analytics" },
                { name: "Real-time Analytics", desc: "Stream processing for instant insights" },
                { name: "Big Data Processing", desc: "Handle petabytes with distributed computing" },
              ].map((tech, i) => (
                <Card key={i} className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="font-bold mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tech.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Data Infrastructure</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Build reliable, scalable data infrastructure that powers your analytics and machine learning
                  initiatives. We specialize in modern data stack implementation.
                </p>
                <ul className="space-y-4">
                  {[
                    "Data pipeline architecture and implementation",
                    "Real-time and batch processing systems",
                    "Data warehouse design and optimization",
                    "Data quality monitoring and validation",
                    "Integration with BI tools and dashboards",
                    "Data governance and compliance",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-bold mb-3">Analytics Platforms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Build comprehensive analytics platforms that deliver insights to stakeholders. From data collection
                    to visualization, we create end-to-end solutions.
                  </p>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-bold mb-3">ML Infrastructure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prepare your data infrastructure for machine learning and AI initiatives. We build pipelines
                    optimized for model training and inference.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock Your Data?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build data infrastructure that drives your business forward.
            </p>
            <Link href="/contact">
              <Button size="lg" className="group">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

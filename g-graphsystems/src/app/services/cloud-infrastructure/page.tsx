import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/app/components/navigation"
import { Footer } from "@/app/components/footer"
import { Cloud, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function CloudInfrastructurePage() {
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
                  <Cloud className="w-7 h-7 text-primary" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-balance">Cloud Infrastructure</h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                DevOps and cloud architecture services for AWS, Azure, and GCP. We build and manage cloud infrastructure
                with CI/CD pipelines, infrastructure as code, and automated deployments that accelerate your development
                cycle.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Cloud Platforms & Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "AWS/Azure/GCP", desc: "Multi-cloud expertise and architecture" },
                { name: "Kubernetes", desc: "Container orchestration at scale" },
                { name: "CI/CD Automation", desc: "Automated testing and deployment pipelines" },
                { name: "Infrastructure as Code", desc: "Terraform, CloudFormation, and more" },
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">DevOps Excellence</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We implement DevOps best practices and cloud-native architectures that improve deployment frequency,
                  reduce failure rates, and accelerate time to market.
                </p>
                <ul className="space-y-4">
                  {[
                    "Cloud architecture design and migration",
                    "Kubernetes and container orchestration",
                    "CI/CD pipeline implementation",
                    "Infrastructure as Code with Terraform",
                    "Monitoring, alerting, and observability",
                    "Cost optimization and resource management",
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
                  <h3 className="text-xl font-bold mb-3">Cloud Migration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Migrate your on-premise infrastructure to the cloud with minimal disruption. We handle the entire
                    migration process from planning to execution.
                  </p>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-bold mb-3">Managed Services</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ongoing management and optimization of your cloud infrastructure. We monitor, maintain, and
                    continuously improve your systems.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Cloud?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build cloud infrastructure that scales with your business.
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

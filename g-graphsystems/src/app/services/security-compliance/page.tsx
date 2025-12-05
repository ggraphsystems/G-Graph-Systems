import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/app/components/navigation"
import { Footer } from "@/app/components/footer"
import { Lock, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function SecurityCompliancePage() {
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
                  <Lock className="w-7 h-7 text-primary" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-balance">Security & Compliance</h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Security-first development with compliance standards built in from day one. We provide penetration
                testing, security audits, and compliance consulting to ensure your systems meet industry standards and
                protect your users.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Security Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Security Audits", desc: "Comprehensive code and infrastructure reviews" },
                { name: "GDPR/HIPAA", desc: "Compliance consulting and implementation" },
                { name: "Penetration Testing", desc: "Identify vulnerabilities before attackers do" },
                { name: "Zero-Trust Architecture", desc: "Modern security frameworks and practices" },
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Security First</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We integrate security into every phase of development, from architecture design to deployment. Our
                  team stays current with emerging threats and best practices.
                </p>
                <ul className="space-y-4">
                  {[
                    "Security architecture and threat modeling",
                    "Secure coding practices and code review",
                    "Vulnerability assessments and penetration testing",
                    "Compliance consulting (GDPR, HIPAA, SOC 2)",
                    "Incident response planning",
                    "Security training for development teams",
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
                  <h3 className="text-xl font-bold mb-3">Compliance Ready</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Build applications that meet regulatory requirements from day one. We help you navigate GDPR, HIPAA,
                    PCI-DSS, and other compliance frameworks.
                  </p>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-bold mb-3">Continuous Security</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Implement continuous security monitoring and automated vulnerability scanning. Stay ahead of threats
                    with proactive security measures.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Systems?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build security into your applications and ensure compliance.
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

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/app/components/navigation"
import { Footer } from "@/app/components/footer"
import { Globe, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function WebApplicationsPage() {
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
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-balance">Web Applications</h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Modern, responsive web applications built with cutting-edge frameworks. We create scalable architectures
                designed for growth, ensuring your web presence delivers exceptional user experiences across all
                devices.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Technologies & Frameworks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "React & Next.js", desc: "Modern React frameworks for blazing-fast web apps" },
                { name: "Progressive Web Apps", desc: "Offline-capable apps that work like native" },
                { name: "Real-time Features", desc: "WebSockets and real-time data synchronization" },
                { name: "API Development", desc: "RESTful and GraphQL API design and implementation" },
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Deliver</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our web applications are built with performance, scalability, and user experience at the forefront. We
                  follow industry best practices and modern development standards to ensure your application is
                  future-proof.
                </p>
                <ul className="space-y-4">
                  {[
                    "Responsive design that works on all devices",
                    "SEO-optimized for maximum visibility",
                    "Performance-first architecture",
                    "Secure authentication and authorization",
                    "Cloud-native deployment strategies",
                    "Comprehensive testing and quality assurance",
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
                  <h3 className="text-xl font-bold mb-3">For Startups</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Get your MVP to market quickly with our rapid development approach. We build scalable foundations
                    that grow with your user base, ensuring you're ready for success from day one.
                  </p>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-bold mb-3">For Enterprises</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transform legacy systems into modern web applications. We specialize in enterprise architecture,
                    ensuring seamless integration with existing systems while delivering cutting-edge user experiences.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Web Application?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how we can help bring your vision to life.
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

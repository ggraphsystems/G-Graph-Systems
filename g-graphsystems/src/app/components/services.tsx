import { Card } from "@/components/ui/card"
import { Globe, Smartphone, Cpu, Database, Cloud, Lock } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    slug: "web-applications",
    description:
      "Modern, responsive web apps built with cutting-edge frameworks. Scalable architecture designed for growth.",
    features: ["React & Next.js", "Progressive Web Apps", "Real-time Features", "API Development"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    slug: "mobile-development",
    description:
      "Native and cross-platform mobile solutions that deliver exceptional user experiences on iOS and Android.",
    features: ["React Native", "Native iOS/Android", "Offline-First", "Push Notifications"],
  },
  {
    icon: Cpu,
    title: "Complex Systems",
    slug: "complex-systems",
    description:
      "Enterprise-grade software systems with microservices architecture, built to handle millions of operations.",
    features: ["Microservices", "Event-Driven", "High Performance", "Distributed Systems"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    slug: "data-engineering",
    description: "Design and implementation of robust data pipelines, warehouses, and analytics platforms.",
    features: ["ETL Pipelines", "Data Warehousing", "Real-time Analytics", "Big Data Processing"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    slug: "cloud-infrastructure",
    description:
      "DevOps and cloud architecture services for AWS, Azure, and GCP. CI/CD pipelines and infrastructure as code.",
    features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD Automation", "Infrastructure as Code"],
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    slug: "security-compliance",
    description: "Security-first development with compliance standards. Penetration testing and security audits.",
    features: ["Security Audits", "GDPR/HIPAA", "Penetration Testing", "Zero-Trust Architecture"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Services Built for <span className="text-primary">Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From initial concept to production deployment, we deliver end-to-end software solutions tailored to your
            business needs. Our engineering team specializes in building systems that grow with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card/50 backdrop-blur-sm group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

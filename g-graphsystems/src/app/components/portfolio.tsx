"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const projects = [
  {
    id: 1,
    title: "Enterprise Healthcare Platform",
    description:
      "A comprehensive healthcare management system serving 50,000+ patients with real-time appointment scheduling, electronic health records, and telemedicine capabilities.",
    category: "Web Application",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "/healthcare-dashboard.png",
    metrics: ["50K+ Users", "99.9% Uptime", "40% Cost Reduction"],
  },
  {
    id: 2,
    title: "FinTech Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication, real-time transactions, and advanced fraud detection for a leading financial institution.",
    category: "Mobile Application",
    tech: ["React Native", "TypeScript", "Firebase", "Stripe"],
    image: "/mobile-banking-app.png",
    metrics: ["100K+ Downloads", "Bank-Grade Security", "4.8 Star Rating"],
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Machine learning-driven analytics platform providing predictive insights and automated reporting for enterprise data teams.",
    category: "Complex System",
    tech: ["Python", "TensorFlow", "React", "MongoDB"],
    image: "/data-analytics-dashboard-dark.jpg",
    metrics: ["10TB+ Data Processed", "85% Accuracy", "Real-time Analytics"],
  },
  {
    id: 4,
    title: "E-Commerce Platform for Retail Chain",
    description:
      "Scalable e-commerce solution integrating inventory management, payment processing, and multi-channel sales for a major retail chain.",
    category: "Web Application",
    tech: ["Next.js", "GraphQL", "Redis", "Kubernetes"],
    image: "/ecommerce-product-interface.jpg",
    metrics: ["$5M+ Revenue", "200K+ Orders", "99.95% Availability"],
  },
  {
    id: 5,
    title: "IoT Fleet Management System",
    description:
      "Real-time tracking and management system for logistics company with 500+ vehicles, featuring predictive maintenance and route optimization.",
    category: "Complex System",
    tech: ["Node.js", "MQTT", "InfluxDB", "Docker"],
    image: "/fleet-tracking-map-interface.jpg",
    metrics: ["500+ Vehicles", "30% Fuel Savings", "24/7 Monitoring"],
  },
  {
    id: 6,
    title: "Social Learning Platform",
    description:
      "Interactive educational platform for a startup, connecting students and tutors with video calls, interactive whiteboards, and progress tracking.",
    category: "Web Application",
    tech: ["Vue.js", "WebRTC", "Express", "MySQL"],
    image: "/online-learning-video-platform.jpg",
    metrics: ["25K+ Students", "1K+ Tutors", "95% Satisfaction"],
  },
]

export function Portfolio() {
  const router = useRouter()

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Button variant="ghost" className="mb-8 -ml-4" onClick={() => router.push("/")}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Our Work</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore a selection of projects where we've partnered with startups and enterprises to deliver innovative
            software solutions. Each project represents our commitment to engineering excellence and delivering
            measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs text-muted-foreground">{metric}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help bring your vision to life with custom software solutions.
            </p>
            <Button size="lg" onClick={() => router.push("/#contact")}>
              Get in Touch
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

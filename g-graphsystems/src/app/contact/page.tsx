"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/app/components/navigation"
import { Footer } from "@/app/components/footer"
import { useState } from "react"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    alert("Thank you! We will get back to you within 24 hours.")
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Let's Build Something <span className="text-primary">Amazing</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to start your project? Get in touch with our engineering team to discuss your requirements and
                explore how we can help bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Information */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Fill out the form and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-6 bg-card rounded-lg border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2">Email Us</h3>
                          <p className="text-sm text-muted-foreground mb-2">For general inquiries</p>
                          <a href="mailto:ggraphsystems@gmail.com" className="text-sm text-primary hover:underline">
                            ggraphsystems@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-card rounded-lg border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <MessageSquare className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2">Schedule a Call</h3>
                          <p className="text-sm text-muted-foreground mb-2">Book a consultation with our team</p>
                          <a href="#" className="text-sm text-primary hover:underline">
                            View available times
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                      <h3 className="font-bold mb-2 text-primary">Enterprise Solutions</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Looking for dedicated support or long-term partnership? Let's discuss custom packages for your
                        organization.
                      </p>
                      <Button variant="outline" size="sm">
                        Contact Sales
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-lg border border-border">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="text-sm font-medium mb-2 block">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="text-sm font-medium mb-2 block">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="web">Web Applications</option>
                          <option value="mobile">Mobile Development</option>
                          <option value="complex">Complex Systems</option>
                          <option value="data">Data Engineering</option>
                          <option value="cloud">Cloud Infrastructure</option>
                          <option value="security">Security & Compliance</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="text-sm font-medium mb-2 block">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select budget range</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k-100k">$50k - $100k</option>
                          <option value="100k+">$100k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="text-sm font-medium mb-2 block">
                        Expected Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">ASAP (1-2 months)</option>
                        <option value="short">Short-term (3-6 months)</option>
                        <option value="medium">Medium-term (6-12 months)</option>
                        <option value="long">Long-term (12+ months)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

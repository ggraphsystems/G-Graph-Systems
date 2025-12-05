"use client"

import { Card } from "@/components/ui/card"
import { Users, Target, Zap, Award } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "People-First Approach",
    description:
      "We build software starting from understanding people - their needs, workflows, and goals. Technology serves humans, not the other way around.",
  },
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Every line of code has a purpose. We align our engineering decisions with your business objectives and user needs.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description:
      "Speed and efficiency are non-negotiable. We optimize for performance at every level - from database queries to UI rendering.",
  },
  {
    icon: Award,
    title: "Quality Standards",
    description:
      "We maintain rigorous code quality standards with comprehensive testing, code reviews, and continuous monitoring.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              About <span className="text-primary">G-Graph Systems</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                G-Graph Systems is a software engineering company specializing in building custom solutions for startups
                and large enterprises. Our team combines deep technical expertise with business acumen to deliver
                software that drives real results.
              </p>
              <p>
                From rapid prototypes to mission-critical systems, we handle projects of all scales. Our engineers have
                built platforms serving millions of users, processing billions of transactions, and powering companies
                across industries.
              </p>
              <p>
                We believe great software starts with understanding people. That's why we invest time in discovery,
                collaborate closely with stakeholders, and iterate based on real user feedback. Our engineering-first
                approach ensures robust, scalable solutions.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/software-team-coding.jpg"
                alt="Engineering team collaboration"
                className="rounded-lg shadow-2xl w-5/6 h-5/6 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

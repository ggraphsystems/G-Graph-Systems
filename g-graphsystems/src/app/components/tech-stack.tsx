import { Badge } from '@/components/ui/badge'

const technologies = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Astro', 'React Native'],
  Backend: ['Node.js', 'Python', 'PostgreSQL'],
  Cloud: ['AWS', 'Vercel', 'Docker', 'Kubernetes'],
  Tools: ['Git', 'CI/CD', 'REST APIs', 'Monitoring'],
}

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Modern <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We work with industry-leading technologies and frameworks to build robust, scalable solutions. Our engineering team stays current with the latest tools and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-bold text-primary mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 lg:p-12 bg-card rounded-lg border border-border max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Full-Stack Engineering</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our cross-functional teams work across the entire technology stack, from database architecture to user interface design. We believe in ownership and accountability at every layer.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">Agile development methodology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">Continuous integration & deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">Test-driven development approach</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <div className="bg-muted/50 p-6 rounded-lg font-mono text-sm border border-border">
                <div className="text-primary mb-2">{'// Code quality matters'}</div>
                <div className="text-muted-foreground">
                  <div>const quality = {'{'}</div>
                  <div className="pl-4">testing: 'comprehensive',</div>
                  <div className="pl-4">reviews: 'mandatory',</div>
                  <div className="pl-4">documentation: 'clear',</div>
                  <div className="pl-4">performance: 'optimized'</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

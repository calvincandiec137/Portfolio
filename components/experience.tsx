import { experiences } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-border">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-3xl mb-10 text-foreground border-l-4 border-accent pl-4 uppercase tracking-wide">
          02. Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="border-l-2 border-accent pl-6 relative">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-card border-2 border-muted-foreground rounded-full" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl text-foreground font-bold">{exp.position}</h3>
                  <p className="text-lg text-accent font-medium">{exp.company}</p>
                </div>
                <div className="text-sm text-muted-foreground mt-1 md:mt-0 md:text-right">
                  <div>{exp.duration}</div>
                  <div>{exp.location}</div>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.highlights.map((highlight, j) => (
                  <li key={j} className="text-base text-muted-foreground flex">
                    <span className="text-accent mr-2">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

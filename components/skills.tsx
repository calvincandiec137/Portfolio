import { skillCategories } from "@/lib/data"

export function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-border">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-2xl mb-10 text-foreground border-l-4 border-accent pl-4 uppercase tracking-wide">
          02. Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg text-foreground mb-4 border-b border-border pb-2 inline-block">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-card border border-border px-3 py-1.5 text-sm text-muted-foreground hover:border-accent transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { projects } from "@/lib/data"
import { ProjectCard } from "./project-card"

export function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-border">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-2xl mb-10 text-foreground border-l-4 border-accent pl-4 uppercase tracking-wide">
          03. Deployed Protocols
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

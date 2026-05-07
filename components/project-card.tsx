import type { Project } from "@/lib/data"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card border border-border p-6 flex flex-col justify-between hover:border-accent hover:-translate-y-0.5 transition-all">
      <div>
        <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
        <p className="text-xs text-muted-foreground mb-4">{project.tech}</p>

        <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-5 mb-5">
          {project.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {project.youtubeId && (
          <div className="aspect-video mb-5 bg-background border border-border overflow-hidden rounded">
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title={project.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm uppercase tracking-wide font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          {">"} GitHub_Repo
        </a>
      )}
    </div>
  )
}

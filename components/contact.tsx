import { profile } from "@/lib/data"
import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-5 text-left">
        <h2 className="text-3xl mb-10 text-foreground border-l-4 border-accent pl-4 uppercase tracking-wide text-left">
          05. Establish Connection
        </h2>

        <p className="text-muted-foreground max-w-md mx-0 mb-10">
          Currently open for internships and collaborative projects involving RAG, Backend Systems or AI/ML.
        </p>

        <div className="flex gap-6 flex-wrap">
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={20} />
            <span className="text-lg">{profile.contact.email}</span>
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
            <span className="text-lg">GitHub</span>
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
            <span className="text-lg">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}

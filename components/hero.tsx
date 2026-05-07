import { profile } from "@/lib/data"

export function Hero() {
  const { terminal } = profile

  return (
    <section id="home" className="min-h-screen flex items-center border-b border-border pt-16">
      <div className="max-w-5xl mx-auto px-5 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-foreground">{profile.name}</h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">{profile.title}</h2>
        <p className="max-w-xl text-muted-foreground mb-8">{profile.bio}</p>

        <div className="bg-card border border-border p-5 rounded text-sm text-card-foreground max-w-xl">
          <div>
            <span className="text-accent mr-2 select-none">$</span>
            neofetch
          </div>
          <pre className="text-muted-foreground mt-2 mb-4 whitespace-pre-wrap text-sm">
            {`OS: ${terminal.os}
Kernel: ${terminal.kernel}
Uptime: ${terminal.uptime}
Shell: ${terminal.shell}
Current Task: ${terminal.currentTask}`}
          </pre>
          <div>
            <span className="text-accent mr-2 select-none">$</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>

        <div className="mt-8 flex gap-3 flex-wrap">
          <a
            href="#projects"
            className="px-5 py-2.5 border border-muted-foreground text-foreground text-sm hover:bg-foreground hover:text-background hover:border-foreground transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-muted-foreground text-foreground text-sm hover:bg-foreground hover:text-background hover:border-foreground transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

import { achievements } from "@/lib/data"

export function Achievements() {
  return (
    <section id="achievements" className="py-20 border-b border-border">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-3xl mb-10 text-foreground border-l-4 border-accent pl-4 uppercase tracking-wide">
          04. Milestones
        </h2>

        <div className="space-y-8">
          {achievements.map((item, i) => (
            <div key={i} className="border-l-2 border-accent pl-5 relative">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-card border-2 border-muted-foreground rounded-full" />
              <span className="text-sm text-muted-foreground block mb-1">{item.date}</span>
              <h3 className="text-xl text-foreground font-bold">{item.title}</h3>
              <p className="text-lg text-muted-foreground mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

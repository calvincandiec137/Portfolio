import { profile, statBars } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="py-20 border-b border-border">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-3xl mb-10 text-foreground border-l-4 border-accent pl-4 uppercase tracking-wide">
          01. System Status
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5">
            {profile.about.map((para, i) => (
              <p key={i} className="text-muted-foreground text-xl">
                {para}
              </p>
            ))}
          </div>

          <div className="space-y-5">
            {statBars.map((stat) => (
              <div key={stat.label}>
                <span className="text-muted-foreground text-lg block mb-1">{stat.label}</span>
                <div className="h-1.5 bg-border rounded overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${stat.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

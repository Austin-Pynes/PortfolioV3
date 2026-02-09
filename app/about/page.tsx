import { PageHeader } from "@/components/page-header"
import { TerminalWindow } from "@/components/terminal-window"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me // Dev Portfolio",
  description: "Learn about me - a 13 year old Year 8 developer.",
}

const facts = [
  { key: "name", value: "[Your Name Here]" },
  { key: "age", value: "13" },
  { key: "school_year", value: "Year 8" },
  { key: "location", value: "United Kingdom" },
  { key: "fav_language", value: "JavaScript / Python" },
  { key: "fav_framework", value: "React + Next.js" },
  { key: "fav_editor", value: "VS Code" },
  { key: "fav_theme", value: "One Dark Pro" },
  { key: "fav_game", value: "Minecraft" },
  { key: "os", value: "Windows 11 (want to try Linux)" },
  { key: "dream_job", value: "Software Engineer" },
]

const timeline = [
  {
    year: "2023",
    title: "The Beginning",
    desc: "Started with Scratch and made my first game -- a terrible platformer that I was incredibly proud of.",
    color: "border-retro-lime",
  },
  {
    year: "2023",
    title: "HTML + CSS Era",
    desc: "Discovered you could make websites with actual code. Made my first (ugly) homepage.",
    color: "border-retro-teal",
  },
  {
    year: "2024",
    title: "JavaScript Awakening",
    desc: "Learned JavaScript and made everything interactive. Alert boxes everywhere.",
    color: "border-retro-gold",
  },
  {
    year: "2024",
    title: "Python Discovery",
    desc: "Started learning Python for school and fell in love. Made a text adventure game.",
    color: "border-retro-rose",
  },
  {
    year: "2025",
    title: "React Revolution",
    desc: "Found React and my brain exploded. Components? State? Amazing.",
    color: "border-retro-teal",
  },
  {
    year: "2025",
    title: "Next.js + Beyond",
    desc: "Discovered Next.js and started building full-stack apps. Started learning TypeScript.",
    color: "border-retro-gold",
  },
  {
    year: "2026",
    title: "This Website",
    desc: "Built this portfolio to show off my work. You're looking at it right now.",
    color: "border-retro-lime",
  },
]

const funThings = [
  "When my code compiles on the first try (rare)",
  "Finding a bug that's been annoying me for hours",
  "Learning a new programming concept",
  "When someone says my project is cool",
  "Midnight coding sessions (don't tell mum)",
  "The sound of a mechanical keyboard",
  "Dark mode. Always dark mode.",
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PageHeader
        tag="about"
        title="About Me"
        description="The person behind the code. A 13 year old Year 8 student obsessed with building things."
      />

      {/* Bio */}
      <section className="mb-12">
        <TerminalWindow title="about_me.txt">
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="font-mono text-retro-gold text-xs">
              $ cat ~/about_me.txt
            </p>
            <p className="text-foreground">
              Hey! I&apos;m a 13 year old student in Year 8, and I&apos;m completely
              obsessed with coding and technology. I started learning to code when
              I was about 11, and I haven&apos;t stopped since.
            </p>
            <p className="text-foreground">
              My journey began with Scratch (yes, the block-based one!) and I quickly
              moved on to HTML and CSS. Then I discovered JavaScript and my mind was
              blown. Now I mainly work with React, Next.js, Python, and I&apos;m
              learning TypeScript.
            </p>
            <p className="text-foreground">
              When I&apos;m not coding, you&apos;ll probably find me playing Minecraft,
              watching tech YouTube videos, or trying to convince my friends that Linux
              is actually cool (they don&apos;t believe me yet).
            </p>
          </div>
        </TerminalWindow>
      </section>

      {/* Quick Facts */}
      <section className="mb-12">
        <p className="font-mono text-xs text-retro-teal mb-4">// quick_facts.json</p>
        <div className="retro-panel p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {facts.map((fact) => (
              <div key={fact.key} className="flex items-baseline gap-2 font-mono text-sm">
                <span className="text-retro-rose text-xs">{fact.key}:</span>
                <span className="text-retro-gold text-xs">&quot;{fact.value}&quot;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <p className="font-mono text-xs text-retro-gold mb-6">// coding_timeline</p>
        <div className="space-y-4">
          {timeline.map((event, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 border-l-2 ${event.color} pl-4`}
            >
              <div className="retro-panel px-3 py-1 shrink-0">
                <span className="font-mono text-xs text-retro-gold">{event.year}</span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun things */}
      <section className="mb-12">
        <p className="font-mono text-xs text-retro-rose mb-4">// things_that_make_me_happy</p>
        <div className="retro-panel p-5">
          <ul className="space-y-2">
            {funThings.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="text-retro-lime font-mono text-xs mt-0.5">+</span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="retro-panel p-5 border-l-2 border-retro-teal/40">
          <p className="font-mono text-xs text-retro-teal mb-2">// get_in_touch</p>
          <p className="text-sm text-muted-foreground mb-4">
            Want to chat? Find me on these platforms:
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {[
              { name: "GitHub", color: "border-retro-lime/40 text-retro-lime hover:border-retro-lime" },
              { name: "Discord", color: "border-retro-teal/40 text-retro-teal hover:border-retro-teal" },
              { name: "Scratch", color: "border-retro-gold/40 text-retro-gold hover:border-retro-gold" },
            ].map((platform) => (
              <span
                key={platform.name}
                className={`font-mono text-xs border px-4 py-1.5 cursor-pointer transition-colors ${platform.color}`}
              >
                {platform.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

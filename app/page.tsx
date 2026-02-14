import { Typewriter } from "@/components/typewriter"
import { TerminalWindow } from "@/components/terminal-window"
import Link from "next/link"

const quickLinks = [
  {
    href: "/projects",
    tag: "PROJECTS",
    title: "My Projects",
    desc: "Games, websites, tools, and bots I've built.",
    accent: "border-retro-teal/40 hover:border-retro-teal",
    tagColor: "text-retro-teal",
  },
  {
    href: "/log",
    tag: "DEV_LOG",
    title: "Dev Log",
    desc: "My coding journey, documented entry by entry.",
    accent: "border-retro-gold/40 hover:border-retro-gold",
    tagColor: "text-retro-gold",
  },
  {
    href: "/about",
    tag: "ABOUT",
    title: "About Me",
    desc: "The person behind the code. My story and interests.",
    accent: "border-retro-rose/40 hover:border-retro-rose",
    tagColor: "text-retro-rose",
  },
]

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
      {/* Hero */}
      <section className="mb-16 md:mb-24">
        <p className="font-mono text-xs text-retro-gold mb-4">// hello_world</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance leading-tight">
          I&apos;m a 13 year old
          <br />
          <span className="text-retro-teal">developer</span> in Year 8.
        </h1>
        <div className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          <Typewriter />
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-6 md:gap-10 flex-wrap mb-10">
          {[
            { label: "Age", value: "13", color: "text-retro-gold" },
            { label: "Years", value: "2", color: "text-retro-teal" },
            { label: "Languages", value: "4", color: "text-retro-rose" },
            { label: "Projects", value: "2", color: "text-retro-lime" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className={`font-mono text-2xl md:text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="font-mono text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-retro-gold/40 via-retro-teal/20 to-transparent" />
      </section>

      {/* Quick Links */}
      <section className="mb-16">
        <p className="font-mono text-xs text-muted-foreground mb-6">// explore</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block group">
              <div
                className={`retro-panel p-5 border-l-2 ${link.accent} transition-all group-hover:bg-retro-slate/80`}
              >
                <p className={`font-mono text-[10px] ${link.tagColor} mb-1.5`}>
                  {link.tag}
                </p>
                <h2 className="text-lg font-bold text-foreground mb-1 group-hover:text-retro-gold transition-colors">
                  {link.title}
                </h2>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Current Status */}
      <section className="mb-16">
        <p className="font-mono text-xs text-muted-foreground mb-6">// currently</p>
        <TerminalWindow title="status.log">
          <div className="font-mono text-sm space-y-2">
            <p>
              <span className="text-retro-gold">working_on</span>
              <span className="text-muted-foreground"> = </span>
              <span className="text-retro-teal">&quot;A new game project in Python&quot;</span>
            </p>
            <p>
              <span className="text-retro-gold">learning</span>
              <span className="text-muted-foreground"> = </span>
              <span className="text-retro-teal">&quot;TypeScript + Three.js&quot;</span>
            </p>
            <p>
              <span className="text-retro-gold">listening_to</span>
              <span className="text-muted-foreground"> = </span>
              <span className="text-retro-teal">&quot;Lofi hip hop beats to code to&quot;</span>
            </p>
            <p>
              <span className="text-retro-gold">reading</span>
              <span className="text-muted-foreground"> = </span>
              <span className="text-retro-teal">&quot;Clean Code by Robert C. Martin&quot;</span>
            </p>
            <p>
              <span className="text-retro-gold">playing</span>
              <span className="text-muted-foreground"> = </span>
              <span className="text-retro-teal">&quot;Minecraft (obviously)&quot;</span>
            </p>
          </div>
        </TerminalWindow>
      </section>

      {/* CTA */}
      <section>
        <div className="retro-panel p-6 md:p-8 border-l-2 border-retro-gold/40">
          <p className="font-mono text-xs text-retro-gold mb-2">// connect</p>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Want to see what I&apos;m building?
          </h2>
          <p className="text-muted-foreground text-sm mb-4">
            Check out my projects or get in touch. I&apos;m always happy to chat about code.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/projects"
              className="font-mono text-sm px-4 py-2 bg-retro-gold text-retro-deep hover:bg-retro-gold/90 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="font-mono text-sm px-4 py-2 border border-border text-muted-foreground hover:text-foreground hover:border-retro-gold/50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

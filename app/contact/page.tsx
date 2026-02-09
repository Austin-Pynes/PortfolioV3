"use client"

import { PageHeader } from "@/components/page-header"
import { TerminalWindow } from "@/components/terminal-window"
import { useState, type FormEvent } from "react"

const socials = [
  {
    name: "GitHub",
    handle: "@your-username",
    desc: "All my open source code and projects live here.",
    color: "border-retro-lime/40 hover:border-retro-lime",
    labelColor: "text-retro-lime",
  },
  {
    name: "Discord",
    handle: "your_username",
    desc: "Best way to chat with me. I'm usually online after school.",
    color: "border-retro-teal/40 hover:border-retro-teal",
    labelColor: "text-retro-teal",
  },
  {
    name: "Scratch",
    handle: "@your-username",
    desc: "Where it all started. Some of my early projects are still there.",
    color: "border-retro-gold/40 hover:border-retro-gold",
    labelColor: "text-retro-gold",
  },
]

export default function ContactPage() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setSubmitted(true)
    setName("")
    setMessage("")
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PageHeader
        tag="contact"
        title="Get in Touch"
        description="Want to chat about code, collaborate on a project, or just say hi? Here's how to reach me."
      />

      {/* Socials */}
      <section className="mb-12">
        <p className="font-mono text-xs text-muted-foreground mb-4">// find_me_on</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {socials.map((s) => (
            <div
              key={s.name}
              className={`retro-panel p-4 border-l-2 ${s.color} transition-all cursor-pointer`}
            >
              <p className={`font-mono text-xs ${s.labelColor} mb-1`}>{s.name}</p>
              <p className="font-mono text-sm text-foreground mb-2">{s.handle}</p>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Message form */}
      <section className="mb-12">
        <p className="font-mono text-xs text-muted-foreground mb-4">// send_a_message</p>
        <TerminalWindow title="message.sh">
          {submitted ? (
            <div className="text-center py-6">
              <p className="font-mono text-retro-lime text-sm mb-1">Message sent!</p>
              <p className="text-sm text-muted-foreground">
                Thanks for reaching out. I&apos;ll get back to you as soon as I can.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="font-mono text-xs text-retro-gold block mb-1.5">
                  $ enter name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name..."
                  maxLength={50}
                  className="w-full bg-retro-deep border border-border font-mono text-sm text-foreground px-3 py-2 focus:border-retro-gold focus:outline-none placeholder:text-muted-foreground/30"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="font-mono text-xs text-retro-gold block mb-1.5">
                  $ enter message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  rows={4}
                  maxLength={500}
                  className="w-full bg-retro-deep border border-border font-mono text-sm text-foreground px-3 py-2 focus:border-retro-gold focus:outline-none resize-none placeholder:text-muted-foreground/30"
                />
                <p className="font-mono text-[10px] text-muted-foreground text-right mt-1">
                  {message.length}/500
                </p>
              </div>
              <button
                type="submit"
                disabled={!name.trim() || !message.trim()}
                className="font-mono text-sm px-4 py-2 bg-retro-gold text-retro-deep hover:bg-retro-gold/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          )}
        </TerminalWindow>
      </section>

      {/* FAQ */}
      <section>
        <p className="font-mono text-xs text-muted-foreground mb-4">// faq</p>
        <div className="space-y-3">
          {[
            {
              q: "Can you build me a website?",
              a: "I'm still learning, but I'd love to collaborate! Let's chat about it.",
            },
            {
              q: "How did you learn to code?",
              a: "Started with Scratch at 11, then self-taught through freeCodeCamp, YouTube, and lots of trial and error.",
            },
            {
              q: "What's your favourite language?",
              a: "JavaScript for web stuff, Python for everything else. Can't pick just one!",
            },
            {
              q: "Can I see your code?",
              a: "Everything is on my GitHub. Feel free to look around, fork, or open issues.",
            },
          ].map((faq, i) => (
            <div key={i} className="retro-panel-highlight p-4">
              <p className="font-mono text-sm text-retro-gold mb-1">{faq.q}</p>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

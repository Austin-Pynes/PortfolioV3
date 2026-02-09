"use client"

import { PageHeader } from "@/components/page-header"
import { SkillBar } from "@/components/skill-bar"
import { useState } from "react"

const skillCategories = {
  languages: {
    label: "Languages",
    tag: "LANG",
    color: "text-retro-gold",
    items: [
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 75 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 70 },
      { name: "TypeScript", level: 40 },
      { name: "Lua", level: 30 },
    ],
  },
  frameworks: {
    label: "Frameworks",
    tag: "FW",
    color: "text-retro-teal",
    items: [
      { name: "React", level: 70 },
      { name: "Next.js", level: 55 },
      { name: "Tailwind CSS", level: 65 },
      { name: "Pygame", level: 60 },
      { name: "discord.py", level: 50 },
      { name: "Node.js", level: 45 },
    ],
  },
  tools: {
    label: "Tools",
    tag: "TOOL",
    color: "text-retro-rose",
    items: [
      { name: "VS Code", level: 95 },
      { name: "Git / GitHub", level: 60 },
      { name: "Figma", level: 35 },
      { name: "Terminal / CLI", level: 55 },
      { name: "Chrome DevTools", level: 70 },
      { name: "Vercel", level: 50 },
    ],
  },
}

type TabKey = keyof typeof skillCategories

const softSkills = [
  "Problem solving (my favourite part of coding!)",
  "Googling errors effectively (a real skill tbh)",
  "Reading documentation (when Stack Overflow fails)",
  "Debugging with console.log (don't judge me)",
  "Learning new things quickly",
  "Working on projects solo and with friends",
  "Explaining tech stuff to non-tech people",
]

const currentlyLearning = [
  { name: "TypeScript", pct: 40 },
  { name: "Three.js", pct: 10 },
  { name: "Docker", pct: 5 },
  { name: "Databases (SQL)", pct: 20 },
  { name: "Testing", pct: 15 },
]

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("languages")
  const category = skillCategories[activeTab]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PageHeader
        tag="skills"
        title="Skills & Tech"
        description="What I know, what I'm learning, and what I use to build things."
      />

      {/* XP bar */}
      <div className="retro-panel p-5 mb-10">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-mono text-2xl font-bold text-retro-gold">LVL 8</span>
          <div className="flex-1 min-w-[200px] bg-retro-deep border border-border h-6 relative overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-retro-teal/60 to-retro-teal transition-all duration-1000"
              style={{ width: "65%" }}
            />
            <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-foreground">
              6,500 / 10,000 XP
            </span>
          </div>
          <span className="font-mono text-xs text-muted-foreground">Next: LVL 9</span>
        </div>
        <p className="font-mono text-[10px] text-muted-foreground mt-2">
          XP earned by completing projects and learning new things
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6">
        {(Object.keys(skillCategories) as TabKey[]).map((key) => {
          const cat = skillCategories[key]
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`font-mono text-xs px-3 py-1.5 border transition-all ${
                activeTab === key
                  ? "border-retro-gold text-retro-gold bg-retro-gold/5"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Skill bars */}
      <div className="retro-panel p-5 mb-10">
        <p className="font-mono text-xs text-retro-gold mb-4">
          // {category.tag.toLowerCase()}_proficiency
        </p>
        <div className="space-y-3">
          {category.items.map((skill) => (
            <SkillBar key={`${activeTab}-${skill.name}`} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="retro-panel p-5 mb-10">
        <p className="font-mono text-xs text-retro-teal mb-4">// soft_skills</p>
        <ul className="space-y-2">
          {softSkills.map((skill, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="text-retro-lime font-mono text-xs mt-0.5">+</span>
              <span className="text-foreground">{skill}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Currently learning */}
      <div className="retro-panel p-5 border-l-2 border-retro-rose/40">
        <p className="font-mono text-xs text-retro-rose mb-4">// currently_learning</p>
        <div className="flex flex-wrap gap-3">
          {currentlyLearning.map((item) => (
            <div key={item.name} className="retro-panel px-4 py-3 min-w-[120px]">
              <p className="font-mono text-xs text-foreground mb-1">{item.name}</p>
              <div className="w-full bg-retro-deep border border-border h-1.5 overflow-hidden">
                <div
                  className="h-full bg-retro-rose/60"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mt-1">{item.pct}%</p>
            </div>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground mt-4">
          Always learning, always growing...
        </p>
      </div>
    </div>
  )
}

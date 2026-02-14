"use client"

import { PageHeader } from "@/components/page-header"
import { useState } from "react"

const categories = {
  hardware: {
    label: "Hardware",
    items: [
      { name: "Laptop", detail: "Windows 11 laptop (it does the job!)" },
      { name: "Monitor", detail: "My laptop screen + an old monitor for dual screen" },
      { name: "Keyboard", detail: "A basic gaming keyboard" },
      { name: "Mouse", detail: "Nothing fancy, just a regular mouse" },
      { name: "Headphones", detail: "JBL headphones that work decently" },
    ],
  },
  software: {
    label: "Software",
    items: [
      { name: "Editor", detail: "VS Code with One Dark Pro theme" },
      { name: "Terminal", detail: "Windows Terminal with Git Bash" },
      { name: "Browser", detail: "Firefox. Always Firefox." },
      { name: "Design", detail: "Figma for UI planning" },
      { name: "Notes", detail: "Notion for project planning and ideas" },
    ],
  },
  extensions: {
    label: "VS Code Extensions",
    items: [
      { name: "ESLint", detail: "Keeps my code clean and consistent" },
      { name: "Prettier", detail: "Auto-formats everything so I don't have to" },
      { name: "GitHub Copilot", detail: "Helps with boilerplate and suggestions" },
      { name: "Auto Rename Tag", detail: "Renames matching HTML/JSX tags" },
      { name: "Error Lens", detail: "Shows errors inline -- a lifesaver" },
      { name: "Material Icon Theme", detail: "Makes the file explorer look nice" },
    ],
  },
  stack: {
    label: "Tech Stack",
    items: [
      { name: "Frontend", detail: "React + Next.js + Tailwind CSS" },
      { name: "Backend", detail: "Next.js API routes / Node.js" },
      { name: "Languages", detail: "TypeScript, JavaScript, Python" },
      { name: "Hosting", detail: "Vercel for web, GitHub for code" },
      { name: "Version Control", detail: "Git + GitHub" },
    ],
  },
}

type TabKey = keyof typeof categories

export default function SetupPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("software")
  const category = categories[activeTab]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PageHeader
        tag="setup"
        title="My Setup"
        description="The hardware, software, and tools I use every day to build things."
      />

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 flex-wrap">
        {(Object.keys(categories) as TabKey[]).map((key) => (
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
            {categories[key].label}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="space-y-3 mb-12">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="retro-panel-highlight p-4"
          >
            <p className="font-mono text-sm text-retro-gold mb-0.5">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Wishlist */}
      <div className="retro-panel p-5 border-l-2 border-retro-rose/40">
        <p className="font-mono text-xs text-retro-rose mb-4">// wishlist</p>
        <p className="text-sm text-muted-foreground mb-3">
          Things I want to add to my setup one day:
        </p>
        <ul className="space-y-2">
          {[
            "A proper mechanical keyboard",
            "An ultrawide monitor",
            "Some basic Raspberry Pi's",
            "A Linux dual-boot setup",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-retro-teal font-mono text-xs mt-0.5">+</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

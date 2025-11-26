"use client"

import { useState } from "react"
import { profile } from "@/lib/data"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/95 border-b border-border z-50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-5 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-lg text-primary">
          ~/{profile.username}
        </a>

        <ul className="hidden md:flex gap-5 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-5 pb-5 bg-background border-b border-border">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

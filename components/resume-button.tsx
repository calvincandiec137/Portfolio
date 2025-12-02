"use client"

import { Download } from "lucide-react"

export default function ResumeButton() {
  return (
    <a
      href="https://drive.google.com/file/d/1ptrZPY8opSJo1rgHU4A0jIzCi74aqWzl/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download resume"
      className="fixed top-18 right-3 z-50"
    >
      <button
        type="button"
        className="h-12 w-25 rounded-xl  bg-primary text-background shadow-lg flex items-center justify-center hover:scale-105 transform transition-all"
      >
        <Download size={18} />
        <p className="ml-1">Resume</p>
      </button>
    </a>
  )
}

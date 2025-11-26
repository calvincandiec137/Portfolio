import { profile } from "@/lib/data"

export function Footer() {
  return (
    <footer className="text-center py-10 text-xs text-muted-foreground border-t border-border">
      <p>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}

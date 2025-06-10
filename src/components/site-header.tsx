import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a1a1a]/80 backdrop-blur-sm px-6">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white">
          JEFFREY CUREG
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            About
          </Link>
          <Link href="/projects" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            Projects
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LazyWaveDivider } from "@/components/lazy-wave-divider"

export default function Home() {
  return (
    <main className="min-h-full bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex flex-col">
        <div className="container mx-auto px-14 py-24 flex-1 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <p className="text-gray-300">Hello, my name is</p>
              <h1 className="text-5xl md:text-4xl font-bold text-[#3498db]">Jeffrey Jordan Cureg</h1>
              <p className="text-lg text-gray-300 max-w-md">
                I am a front-end developer with a passion for building beautiful and user-friendly websites and web
                applications
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="bg-[#3498db] hover:bg-[#2980b9] text-white px-8">
                  <Link href="/about" prefetch={false}>ABOUT ME</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#3498db] text-[#3498db] hover:bg-[#] px-8 hover:border-[#2980b9]"
                >
                  <Link href="/contact" prefetch={false}>CONTACT ME</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="rounded-full object-cover border-4 border-[#3498db]/20"
                  priority
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PC9zdmc+"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <LazyWaveDivider />
        </div>
      </div>
    </main>
  )
}
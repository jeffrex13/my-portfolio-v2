import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-white">
      <PageHeader title="Projects" description="A showcase of my recent work and personal projects" />
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <Card className="bg-[#2a2a2a] border-[#3a3a3a] text-white">
            <CardHeader>
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 1" fill className="object-cover" />
              </div>
              <CardTitle>E-commerce Website</CardTitle>
              <CardDescription className="text-gray-400">
                A fully responsive e-commerce platform built with React and Next.js
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs bg-[#3498db]/20 text-[#3498db] rounded">React</span>
                <span className="px-2 py-1 text-xs bg-[#3498db]/20 text-[#3498db] rounded">Next.js</span>
                <span className="px-2 py-1 text-xs bg-[#3498db]/20 text-[#3498db] rounded">Tailwind CSS</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="border-[#3498db] text-[#3498db] hover:bg-[#3498db]/10">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
              <Button size="sm" className="bg-[#3498db] hover:bg-[#2980b9]">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </CardFooter>
          </Card>

          {/* Project 2 */}
          <Card className="bg-[#2a2a2a] border-[#3a3a3a] text-white">
            <CardHeader>
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 2" fill className="object-cover" />
              </div>
              <CardTitle>Task Management App</CardTitle>
              <CardDescription className="text-gray-400">
                A productivity app with drag-and-drop functionality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs bg-[#3498db]/20 text-[#3498db] rounded">React</span>
                <span className="px-2 py-1 text-xs bg-[#3498db]/20 text-[#3498db] rounded">TypeScript</span>
                <span className="px-2 py-1 text-xs bg-[#3498db]/20 text-[#3498db] rounded">Firebase</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="border-[#3498db] text-[#3498db] hover:bg-[#3498db]/10">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
              <Button size="sm" className="bg-[#3498db] hover:bg-[#2980b9]">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </CardFooter>
          </Card>

          {/* Project 3 */}
          <Card className="bg-[#2a2a2a] border-[#3a3a3a] text-white">
            <CardHeader>
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 3" fill className="object-cover" />
              </div>
              <CardTitle>Weather Dashboard</CardTitle>
              <CardDescription className="text-gray-400">
                Real-time weather application with forecast data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs bg-[#3498db]/20 text-[#3498db] rounded">JavaScript</span>
                <span className="px-2 py-1 text-xs bg-[#3498db]/20 text-[#3498db] rounded">API</span>
                <span className="px-2 py-1 text-xs bg-[#3498db]/20 text-[#3498db] rounded">CSS</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="border-[#3498db] text-[#3498db] hover:bg-[#3498db]/10">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
              <Button size="sm" className="bg-[#3498db] hover:bg-[#2980b9]">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
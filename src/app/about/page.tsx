import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const technologies = [
  { name: "HTML5", icon: "🌐", description: "Semantic markup & structure" },
  { name: "CSS3", icon: "🎨", description: "Modern styling & animations" },
  { name: "JavaScript", icon: "⚡", description: "Dynamic functionality" },
  { name: "TypeScript", icon: "📘", description: "Type-safe development" },
  { name: "React", icon: "⚛️", description: "Component-based UIs" },
  { name: "Next.js", icon: "▲", description: "Full-stack React framework" },
  { name: "Tailwind CSS", icon: "💨", description: "Utility-first styling" },
  { name: "Node.js", icon: "🟢", description: "Server-side JavaScript" },
  { name: "Git", icon: "🔀", description: "Version control" },
  { name: "Figma", icon: "🎯", description: "UI/UX design" },
  { name: "Responsive Design", icon: "📱", description: "Mobile-first approach" },
  { name: "Web Performance", icon: "🚀", description: "Speed optimization" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <PageHeader title="About Me" description="Learn more about my journey as a front-end developer" />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 text-gray-300 mb-16">
            <p className="text-lg leading-relaxed">
              I am a passionate front-end developer with expertise in creating responsive, user-friendly websites and
              web applications. My journey in web development started with a curiosity about how websites work and has
              evolved into a career focused on crafting exceptional user experiences.
            </p>

            <p className="text-lg leading-relaxed">
              With a strong foundation in modern web technologies, I specialize in React and Next.js ecosystems. I
              believe in writing clean, maintainable code and staying current with industry best practices.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center">
            Technologies I <span className="text-[#3498db]">Work With</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative bg-gradient-to-br from-[#2a2a2a] to-[#1e1e1e] p-6 rounded-xl border border-gray-700/50 hover:border-[#3498db]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#3498db]/20 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3498db]/10 to-[#2980b9]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="text-4xl group-hover:scale-110 transform transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h4 className="font-semibold text-white group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                      {tech.description}
                    </p>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3498db]/0 via-[#3498db]/5 to-[#3498db]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-gray-400 mb-6">Interested in working together? Let's create something amazing.</p>
            <Button asChild className="bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-3 text-lg">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

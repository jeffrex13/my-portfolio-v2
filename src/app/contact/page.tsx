"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen text-white">
      <PageHeader title="Contact Me" description="Let's work together on your next project" />
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-gray-300">
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have
              other requests or questions, don't hesitate to contact me.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#3498db] p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-400">Manila, Philippines</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#3498db] p-3 rounded-full">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-400">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#3498db] p-3 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-400">+63 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-[#2a2a2a] p-6 rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-[#333] border-[#444] focus-visible:ring-[#3498db]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="bg-[#333] border-[#444] focus-visible:ring-[#3498db]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={6}
                className="bg-[#333] border-[#444] focus-visible:ring-[#3498db]"
              />
            </div>

            <Button type="submit" className="bg-[#3498db] hover:bg-[#2980b9] w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

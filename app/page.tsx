import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, ChevronRight, CheckCircle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ServicesSection from "@/components/sections/ServicesSection"
import WhyChooseMeSection from "@/components/sections/WhyChooseMeSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ContactSection from "@/components/sections/ContactSection"
import LawyerSection from "@/components/sections/LawyerSection"



export default function Home() {
  return (
    
    <div className="flex flex-col min-h-[100vh] h-full">
      <main className="flex-1">
        <HeroSection />
        <LawyerSection/>

        <AboutSection />
        <ServicesSection />
        <WhyChooseMeSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
    
  )
}

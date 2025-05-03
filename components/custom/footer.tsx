"use client"
import { Mail, MapPin,  MessageSquare, Instagram, Facebook } from 'lucide-react'
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import React from "react"
import Image from "next/image"

const Footer = () => {
  const router = useRouter()
  const pathname = usePathname()
  
  const handleNavigation = (hash: string) => {
    if (pathname !== "/") {
      router.push(`/#${hash}`)
    } else {
      const section = document.getElementById(hash)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  
  return (
    <footer className="bg-[#2D2E83] text-white py-12 px-10 md:px-16 lg:px-24 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image src="/logo (2).png" alt="Carlos Alberto Rodríguez G." width={150} height={100} className="h-20 w-auto"/>
            </div>
            <p className="text-white mb-4">Abogado Penalista | Asesor Jurídico Integral</p>
            <p className="text-[#ffffff]">"Defensa estratégica, asesoría ética y compromiso con la justicia."</p>
          </div>
          
          <div>
            <h3 className="text-lg font-extrabold mb-4 text-white">Enlaces rápidos</h3>
            <ul className="space-y-2 italic">
              <li>
                <button 
                  onClick={() => handleNavigation("inicio")} 
                  className="text-white hover:text-[#1D71B8] transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("sobre-mi")} 
                  className="text-[#ffffff] hover:text-[#1D71B8] transition-colors"
                >
                  Sobre Mí
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("servicios")} 
                  className="text-[#ffffff] hover:text-[#1D71B8] transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("por-que-elegirme")} 
                  className="text-[#ffffff] hover:text-[#1D71B8] transition-colors"
                >
                  ¿Por qué Elegirme?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("testimonios")} 
                  className="text-[#ffffff] hover:text-[#1D71B8] transition-colors"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("contacto")} 
                  className="text-[#ffffff] hover:text-[#1D71B8] transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg  font-extrabold mb-4 text-white">Contacto</h3>
            <ul className="space-y-3 italic">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white mt-0.5" />
                <a href="mailto:abogado.crodriguezg@gmail.com" className="text-[#ffffff] hover:text-[#1D71B8] transition-colors">
                  abogado.crodriguezg@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white mt-0.5" />
                <span className="text-[#ffffff]">Cali, Colombia</span>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-white mt-0.5" />
                <a href="https://www.instagram.com/abogado_carlosrodriguezg?igsh=d2F6a25vM3hrbGc0&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#1D71B8] transition-colors ">
                  Instagram
                </a>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <MessageSquare className="h-5 w-5 text-white mt-0.5" />
                <a href="https://wa.me/573206164833?text=Hola%2C%20quisiera%20solicitar%20una%20asesor%C3%ADa%20legal." target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#1D71B8] transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="h-5 w-5 text-white mt-0.5" />
                <a href="https://www.facebook.com/share/1BXQk5Wktq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#1D71B8] transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white mt-8 pt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Carlos Alberto Rodríguez Gutiérrez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

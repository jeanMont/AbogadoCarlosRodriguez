"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const NavLinks = ({ closeMenu }: { closeMenu?: () => void }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (hash: string) => {
    if (pathname !== "/") {
      router.push(`/#${hash}`)
    } else {
      const section = document.getElementById(hash)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
    closeMenu?.()
  }

  const commonClass = "cursor-pointer text-sm font-bold  text-white hover:text-blue-700 transition-colors px-3 py-2"

  return (
    <>
      <Link href="/" onClick={() => closeMenu?.()} className={`${commonClass} text-center`}>
        Inicio
      </Link>
      <button onClick={() => handleNavigation("sobre-mi")} className={commonClass}>
        Acerca de mí
      </button>
      <button onClick={() => handleNavigation("servicios")} className={commonClass}>
        Servicios
      </button>
      <button onClick={() => handleNavigation("por-que-elegirme")} className={commonClass}>
        ¿Por qué Elegirme?
      </button>
      <button onClick={() => handleNavigation("testimonios")} className={commonClass}>
        Testimonios
      </button>
      <button onClick={() => handleNavigation("contacto")} className={commonClass}>
        Contacto
      </button>
      <button onClick={() => handleNavigation("idioma")} className={commonClass}>
        Idioma
      </button>
    </>
  )
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full flex items-center justify-between px-4 py-2">
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full">
        {/* Contenedor centrado para los links */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-6">
            <NavLinks />
          </div>
        </div>
        
        {/* Botón al extremo derecho */}
        <div className="flex justify-end">
          <a href="https://wa.me/573206164833?text=Hola%2C%20quisiera%20solicitar%20una%20asesor%C3%ADa%20legal." target="_blank" rel="noopener noreferrer"><Button className="cursor-pointer bg-[#25D366] hover:bg-blue-800 text-white">
            Solicitar Asesoría
          </Button></a>
          
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden ml-auto relative">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="border-gray-300 text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {isOpen && (
          <div className="absolute top-16 right-0 w-64 bg-[#000000] shadow-lg rounded-md border border-gray-200 flex flex-col p-4 gap-2 z-50">
            <NavLinks closeMenu={() => setIsOpen(false)} />
              <a href="https://wa.me/573206164833?text=Hola%2C%20quisiera%20solicitar%20una%20asesor%C3%ADa%20legal." target="_blank" rel="noopener noreferrer"><Button className="cursor-pointer w-full bg-blue-700 hover:bg-blue-800 text-white mt-2">
              Solicitar Asesoría
            </Button>

              </a>
            
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav

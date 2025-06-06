"use client"

import { Mail, MapPin, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function ContactSection() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const t = useTranslations("ContactSection")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setMessage("")
    setError("")

    const form = e.currentTarget
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      asunto: (form.elements.namedItem("asunto") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      const result = await res.json()

      if (!res.ok) {
        setError(result.error || t("error.general"))
      } else {
        setMessage(t("success"))
        form.reset()
      }
    } catch (error) {
      console.error("Error al enviar:", error)
      setError(t("error.exception"))
    } finally {
      setLoading(false)
      setTimeout(() => {
        setMessage("")
        setError("")
      }, 5000)
    }
  }

  return (
    <section id="contacto" className="scroll-mt-35 py-16 md:py-24 px-10 md:px-16 lg:px-24 relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/logo-3d.png"
          alt={t("backgroundAlt")}
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#2D2E83]">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="h-6 w-6 text-[#1D71B8] mt-0.5" />
              <div>
                <h3 className="font-extrabold italic text-[#2D2E83]">{t("emailTitle")}</h3>
                <p className="text-black">abogado.crodriguezg@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-[#1D71B8] mt-0.5" />
              <div>
                <h3 className="font-extrabold italic text-[#2D2E83]">{t("locationTitle")}</h3>
                <p className="text-black">Cali, Colombia</p>
              </div>
            </div>

            <div className="pt-6 flex gap-4">
              <a
                href="https://wa.me/573206164833?text=Hola%2C%20quisiera%20solicitar%20una%20asesor%C3%ADa%20legal."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="cursor-pointer bg-[#25D366] hover:bg-[#2D2E83] text-white">
                  <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div>
            <Card className="border-[#9A9A9C] bg-white/35">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4 text-[#2D2E83]">{t("formTitle")}</h3>

                {message && (
                  <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded-md mb-4">
                    {message}
                  </div>
                )}
                {error && (
                  <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-2 rounded-md mb-4">
                    {error}
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium text-black">
                        {t("fields.name")}
                      </label>
                      <Input id="nombre" placeholder={t("placeholders.name")} className="border-black focus:border-[#1D71B8]" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefono" className="text-sm font-medium text-black">
                        {t("fields.phone")}
                      </label>
                      <Input id="telefono" placeholder={t("placeholders.phone")} className="border-black focus:border-[#1D71B8]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-black">
                      {t("fields.email")}
                    </label>
                    <Input id="email" type="email" placeholder={t("placeholders.email")} className="border-black focus:border-[#1D71B8]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="asunto" className="text-sm font-medium text-black">
                      {t("fields.subject")}
                    </label>
                    <Input id="asunto" placeholder={t("placeholders.subject")} className="border-black focus:border-[#1D71B8]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium text-black">
                      {t("fields.message")}
                    </label>
                    <Textarea id="mensaje" placeholder={t("placeholders.message")} rows={4} className="border-black focus:border-[#1D71B8]" />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full bg-[#1D71B8] hover:bg-[#2D2E83] text-white">
                    {loading ? t("sending") : t("submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useTranslations } from "next-intl"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  const t = useTranslations("ServicesSection")

  return (
    <section
      id="servicios"
      className="scroll-mt-35 py-16 md:py-24 bg-white px-10 md:px-16 lg:px-24"
    >
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#2D2E83]">
          {t("title")}
        </h2>
        <p className="text-xl text-[#1D71B8] italic text-center mb-12">
          {t("subtitle")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Criminal Law */}
          <ServiceCard
            icon="⚖️"
            title={t("criminal.title")}
            items={[t("criminal.item1"), t("criminal.item2"), t("criminal.item3")]}
          />

          {/* Card 2: Investigation */}
          <ServiceCard
            icon="🔍"
            title={t("investigation.title")}
            items={[t("investigation.item1"), t("investigation.item2"), t("investigation.item3")]}
          />

          {/* Card 3: Asset Forfeiture */}
          <ServiceCard
            icon="💼"
            title={t("assetForfeiture.title")}
            items={[t("assetForfeiture.item1"), t("assetForfeiture.item2"), t("assetForfeiture.item3")]}
          />

          {/* Card 4: Corporate */}
          <ServiceCard
            icon="🏢"
            title={t("corporate.title")}
            items={[t("corporate.item1"), t("corporate.item2"), t("corporate.item3")]}
          />

          {/* Card 5: Intellectual Property */}
          <ServiceCard
            icon="🧠"
            title={t("ip.title")}
            items={[t("ip.item1"), t("ip.item2")]}
          />

          {/* Card 6: Labor Law */}
          <ServiceCard
            icon="👥"
            title={t("labor.title")}
            items={[t("labor.item1"), t("labor.item2")]}
          />

          {/* Card 7: Civil & Administrative Law */}
          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8] md:col-span-2 lg:col-span-3">
            <CardContent className="p-6">
              <div className="mb-4 text-3xl">📄</div>
              <h3 className="text-xl font-extrabold italic mb-3 text-[#2D2E83]">
                {t("civil.title")}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[t("civil.item1"), t("civil.item2"), t("civil.item3")].map((item, index) => (
                  <ul key={index} className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
                      <span className="text-[#9A9A9C]">{item}</span>
                    </li>
                  </ul>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <a href="#contacto">
            <Button size="lg" className="cursor-pointer bg-[#25D366] hover:bg-[#2D2E83] text-white">
              {t("cta")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon,
  title,
  items,
}: {
  icon: string
  title: string
  items: string[]
}) {
  return (
    <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8]">
      <CardContent className="p-6">
        <div className="mb-4 text-3xl">{icon}</div>
        <h3 className="text-xl font-extrabold italic mb-3 text-[#2D2E83]">
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-[#1D71B8] shrink-0 mt-0.5" />
              <span className="text-[#9A9A9C]">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
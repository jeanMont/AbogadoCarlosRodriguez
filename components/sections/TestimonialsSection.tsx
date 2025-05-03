import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const t = useTranslations("TestimonialsSection")

  return (
    <section id="testimonios" className="scroll-mt-35 py-16 md:py-24 bg-white px-10 md:px-16 lg:px-24 ">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#2D2E83]">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8]">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4 text-[#1D71B8]">"</div>
                <p className="text-[#9A9A9C] mb-6 flex-grow">{t("testimony1.quote")}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full border border-[#1D71B8] bg-[#f0f7ff] text-[#1D71B8] font-medium">
                    {t("testimony1.initials")}
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2E83]">{t("testimony1.name")}</p>
                    <p className="text-sm text-[#9A9A9C]">{t("testimony1.role")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg border-[#9A9A9C] hover:border-[#1D71B8]">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4 text-[#1D71B8]">"</div>
                <p className="text-[#9A9A9C] mb-6 flex-grow">{t("testimony2.quote")}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full border border-[#1D71B8] bg-[#f0f7ff] text-[#1D71B8] font-medium">
                    {t("testimony2.initials")}
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2E83]">{t("testimony2.name")}</p>
                    <p className="text-sm text-[#9A9A9C]">{t("testimony2.role")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('AboutSection');

  return (
    <section
      id="sobre-mi"
      className="relative scroll-mt-35 py-16 md:py-24 px-10 md:px-16 lg:px-24"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/logo-3d.png"
          alt={t('backgroundAlt')}
          fill
          className="object-cover object-center opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container relative z-10">
        <h2 className="text-5xl md:text-4xl font-bold mb-12 text-center text-[#2D2E83]">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[550px] rounded-lg overflow-hidden shadow-xl border-2 border-[#1D71B8]">
            <Image
              src="/CARLOSR.jpg?height=800&width=600"
              alt={t('imageAlt')}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-2xl">
            <p className="text-[#2D2E83]">{t('paragraph1')}</p>
            <p className="text-[#2D2E83]">{t('paragraph2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

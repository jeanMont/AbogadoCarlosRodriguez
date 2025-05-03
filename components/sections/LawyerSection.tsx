import { useTranslations } from 'next-intl';
import { Phone } from 'lucide-react';

export default function LawyerSection() {
  const t = useTranslations('LawyerSection');

  return (
    <section id="inicio" className="scroll-mt-20 relative py-10 md:py-28 px-10 md:px-16 lg:px-24 overflow-hidden">
      <div className="container relative z-30 flex flex-col items-center text-center animate-float space-y-6">

        <h1 className="text-5xl md:text-5xl font-bold tracking-tight text-[#2D2E83] animate-fade-in-up">
          {t('name')}
        </h1>
        <h2 className="text-2xl md:text-2xl font-medium text-[#1D71B8] animate-fade-in-up animation-delay-200">
          {t('title')}
        </h2>
        <p className="text-lg font-medium italic text-[#2D2E83] animate-fade-in-up animation-delay-400">
          {t('quote')}
        </p>
        <p className="text-[#2D2E83] text-xl max-w-2xl animate-fade-in-up animation-delay-600">
          {t('description')}
        </p>
        <div className="flex items-center gap-2 animate-fade-in-up animation-delay-800">
          <Phone className="h-5 w-5 text-[#9A9A9C]" />
          <p className="font-medium text-[#2D2E83]">
            {t('cta')}
          </p>
        </div>

      </div>
    </section>
  );
}

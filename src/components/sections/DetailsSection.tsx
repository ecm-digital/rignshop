'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function DetailsSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Aligned heading (outside grid to zachować spójny margines) */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t('detailsTitle')}</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Copy */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t('detailsParagraph')}</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-2xl mb-2">💤</div>
                <h3 className="font-semibold text-gray-900 mb-1">{t('detailSleepTitle')}</h3>
                <p className="text-gray-600 text-sm">{t('detailSleepDesc')}</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-2xl mb-2">🏃</div>
                <h3 className="font-semibold text-gray-900 mb-1">{t('detailActivityTitle')}</h3>
                <p className="text-gray-600 text-sm">{t('detailActivityDesc')}</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-2xl mb-2">❤️</div>
                <h3 className="font-semibold text-gray-900 mb-1">{t('detailHRVTitle')}</h3>
                <p className="text-gray-600 text-sm">{t('detailHRVDesc')}</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-2xl mb-2">🔋</div>
                <h3 className="font-semibold text-gray-900 mb-1">{t('detailBatteryTitle')}</h3>
                <p className="text-gray-600 text-sm">{t('detailBatteryDesc')}</p>
              </div>
            </div>

            <a href="#order" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-900 text-white hover:bg-primary-800 shadow-md border border-primary-700 transition">
              {t('orderNow')}
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Feature list */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('detailsGainsTitle')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>{t('detailsGain1')}</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>{t('detailsGain2')}</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>{t('detailsGain3')}</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>{t('detailsGain4')}</span></li>
            </ul>
            <div className="mt-6 text-sm text-gray-500">
              {t('detailsCompatibility')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{t('home.title')}</h1>
      <p>{t('home.greeting')}</p>
    </main>
  );
}

import About from '../../components/About'
import PageHeader from '../../components/PageHeader'
import { useTranslation } from '../i18n/LanguageContext'

export default function AboutPage() {
  const { t } = useTranslation()
  return (
    <>
      <PageHeader title={t('nav.about')} bgImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80" />
      <About />
    </>
  )
}

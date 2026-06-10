import Services from '../../components/Services'
import PageHeader from '../../components/PageHeader'
import { useTranslation } from '../i18n/LanguageContext'

export default function ServicesPage() {
  const { t } = useTranslation()
  return (
    <>
      <PageHeader title={t('nav.services')} bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80" />
      <Services />
    </>
  )
}

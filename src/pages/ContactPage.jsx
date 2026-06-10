import Locations from '../../components/Locations'
import PageHeader from '../../components/PageHeader'
import { useTranslation } from '../i18n/LanguageContext'

export default function ContactPage() {
  const { t } = useTranslation()
  return (
    <>
      <PageHeader title={t('nav.contact')} bgImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80" />
      <Locations />
    </>
  )
}

import SimpleServiceDetail from '../../components/SimpleServiceDetail'
import PageHeader from '../../components/PageHeader'
import { useTranslation } from '../i18n/LanguageContext'

export default function WaterSanitationPage() {
  const { t } = useTranslation()
  const servicesItems = t('services.items') || []
  const desc = servicesItems[2]?.desc

  return (
    <>
      <PageHeader title={t('feature4.label')} bgImage="https://images.unsplash.com/photo-1519414442781-fbd745c5b497?w=1200&q=80" />
      <SimpleServiceDetail
        id="water-sanitation"
        label={t('feature4.label')}
        title={<>{t('feature4.title_start')}<br />{t('feature4.title_br')} <em>{t('feature4.title_em')}</em></>}
        desc={desc}
        imgSrc="https://images.unsplash.com/photo-1519414442781-fbd745c5b497?w=1200&q=80"
        imgAlt="Water and Sanitation"
      />
    </>
  )
}

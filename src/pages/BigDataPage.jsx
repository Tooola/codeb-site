import SimpleServiceDetail from '../../components/SimpleServiceDetail'
import PageHeader from '../../components/PageHeader'
import { useTranslation } from '../i18n/LanguageContext'

export default function BigDataPage() {
  const { t } = useTranslation()
  const servicesItems = t('services.items') || []
  const desc = servicesItems[3]?.desc

  return (
    <>
      <PageHeader title={t('feature3.label')} bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" />
      <SimpleServiceDetail
        id="big-data"
        label={t('feature3.label')}
        title={<>{t('feature3.title_start')}<br />{t('feature3.title_br')} <em>{t('feature3.title_em')}</em></>}
        desc={desc}
        imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
        imgAlt="Big Data"
        reversed={true}
      />
    </>
  )
}

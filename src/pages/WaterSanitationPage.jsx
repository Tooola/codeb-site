import Feature from '../../components/Feature'
import PageHeader from '../../components/PageHeader'
import { useTranslation } from '../i18n/LanguageContext'
import { Droplets, Building, Activity, Shield } from 'lucide-react'

export default function WaterSanitationPage() {
  const { t } = useTranslation()
  const f4Steps = t('feature4.steps') || []

  return (
    <>
      <PageHeader title={t('feature4.label')} bgImage="https://images.unsplash.com/photo-1519414442781-fbd745c5b497?w=1200&q=80" />
      <Feature
        id="water-sanitation"
        label={t('feature4.label')}
        title={<>{t('feature4.title_start')}<br />{t('feature4.title_br')} <em>{t('feature4.title_em')}</em></>}
        imgSrc="https://images.unsplash.com/photo-1519414442781-fbd745c5b497?w=1200&q=80"
        imgAlt="Water and Sanitation"
        reversed
        steps={[
          { icon: <Building className="step-icon-svg" />, title: f4Steps[0]?.title, desc: f4Steps[0]?.desc },
          { icon: <Droplets className="step-icon-svg" />, title: f4Steps[1]?.title, desc: f4Steps[1]?.desc },
          { icon: <Activity className="step-icon-svg" />, title: f4Steps[2]?.title, desc: f4Steps[2]?.desc },
          { icon: <Shield className="step-icon-svg" />, title: f4Steps[3]?.title, desc: f4Steps[3]?.desc },
        ]}
      />
    </>
  )
}

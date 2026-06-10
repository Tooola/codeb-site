import Feature from '../../components/Feature'
import PageHeader from '../../components/PageHeader'
import { useTranslation } from '../i18n/LanguageContext'
import { MapPin, FileText, FileSignature, Landmark, Building2 } from 'lucide-react'

export default function RenewableEnergyPage() {
  const { t } = useTranslation()
  const f1Steps = t('feature1.steps') || []

  return (
    <>
      <PageHeader title={t('feature1.label')} bgImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80" />
      <Feature
        id="renewable-energy"
        label={t('feature1.label')}
        title={<>{t('feature1.title_start')}<br />{t('feature1.title_br')} <em>{t('feature1.title_em')}</em></>}
        imgSrc="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
        imgAlt="Renewable Energy"
        steps={[
          { icon: <MapPin className="step-icon-svg" />, title: f1Steps[0]?.title, desc: f1Steps[0]?.desc },
          { icon: <FileText className="step-icon-svg" />, title: f1Steps[1]?.title, desc: f1Steps[1]?.desc },
          { icon: <FileSignature className="step-icon-svg" />, title: f1Steps[2]?.title, desc: f1Steps[2]?.desc },
          { icon: <Landmark className="step-icon-svg" />, title: f1Steps[3]?.title, desc: f1Steps[3]?.desc },
          { icon: <Building2 className="step-icon-svg" />, title: f1Steps[4]?.title, desc: f1Steps[4]?.desc },
        ]}
      />
    </>
  )
}

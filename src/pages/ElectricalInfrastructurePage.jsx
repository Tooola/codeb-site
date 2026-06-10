import Feature from '../../components/Feature'
import PageHeader from '../../components/PageHeader'
import { useTranslation } from '../i18n/LanguageContext'
import { Lightbulb, Zap, Plug, Wrench } from 'lucide-react'

export default function ElectricalInfrastructurePage() {
  const { t } = useTranslation()
  const f2Steps = t('feature2.steps') || []

  return (
    <>
      <PageHeader title={t('feature2.label')} bgImage="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80" />
      <Feature
        id="electrical-infrastructure"
        label={t('feature2.label')}
        title={<>{t('feature2.title_start')}<br />{t('feature2.title_br')} <em>{t('feature2.title_em')}</em></>}
        imgSrc="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80"
        imgAlt="Electrical Infrastructure"
        reversed
        steps={[
          { icon: <Lightbulb className="step-icon-svg" />, title: f2Steps[0]?.title, desc: f2Steps[0]?.desc },
          { icon: <Zap className="step-icon-svg" />, title: f2Steps[1]?.title, desc: f2Steps[1]?.desc },
          { icon: <Plug className="step-icon-svg" />, title: f2Steps[2]?.title, desc: f2Steps[2]?.desc },
          { icon: <Wrench className="step-icon-svg" />, title: f2Steps[3]?.title, desc: f2Steps[3]?.desc },
        ]}
      />
    </>
  )
}

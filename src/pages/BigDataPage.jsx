import Feature from '../../components/Feature'
import PageHeader from '../../components/PageHeader'
import { useTranslation } from '../i18n/LanguageContext'
import { Database, Server, ShieldCheck, BarChart } from 'lucide-react'

export default function BigDataPage() {
  const { t } = useTranslation()
  const f3Steps = t('feature3.steps') || []

  return (
    <>
      <PageHeader title={t('feature3.label')} bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" />
      <Feature
        id="big-data"
        label={t('feature3.label')}
        title={<>{t('feature3.title_start')}<br />{t('feature3.title_br')} <em>{t('feature3.title_em')}</em></>}
        imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
        imgAlt="Big Data"
        steps={[
          { icon: <Database className="step-icon-svg" />, title: f3Steps[0]?.title, desc: f3Steps[0]?.desc },
          { icon: <Server className="step-icon-svg" />, title: f3Steps[1]?.title, desc: f3Steps[1]?.desc },
          { icon: <ShieldCheck className="step-icon-svg" />, title: f3Steps[2]?.title, desc: f3Steps[2]?.desc },
          { icon: <BarChart className="step-icon-svg" />, title: f3Steps[3]?.title, desc: f3Steps[3]?.desc },
        ]}
      />
    </>
  )
}

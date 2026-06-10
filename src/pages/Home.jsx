import Hero from '../../components/Hero'
import MarqueeBand from '../../components/Marquee'
import About from '../../components/About'
import Stats from '../../components/Stats'
import Locations from '../../components/Locations'

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <About preview={true} />
      <Stats />
      <Locations />
    </>
  )
}

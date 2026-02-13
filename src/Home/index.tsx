import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../Hero'
import Values from '../Values'
import Services from '../Services'
import Space from '../Space'
import About from '../About'
import Calendar from '../Calendar'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <>
      <Hero />
      <Values />
      <Services />
      <Space />
      <About />
      <Calendar />
    </>
  )
}

export default Home

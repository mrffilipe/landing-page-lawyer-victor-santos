import styles from './page.module.css'

import Welcome from '@/components/Welcome'
import AreasOfExpertise from '@/components/AreasOfExpertise'
import AboutMe from '@/components/AboutMe'
import Cases from '@/components/Cases'
import Contact from '@/components/Contact'
import MoreInformation from '@/components/MoreInformation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Welcome />
      <AreasOfExpertise />
      <AboutMe />
      <Cases />
      <Contact />
      <MoreInformation />
      <Footer />
    </>
  )
}
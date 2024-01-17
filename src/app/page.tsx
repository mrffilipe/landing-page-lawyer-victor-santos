import styles from './page.module.css'

import LawyerProfile from '@/components/LawyerProfile'
import Experience from '@/components/Experience'
import AboutMe from '@/components/AboutMe'
import Cases from '@/components/Cases'
import Contact from '@/components/Contact'
import MoreInformation from '@/components/MoreInformation'

export default function Home() {
  return (
    <>
      <LawyerProfile />
      <Experience />
      <AboutMe />
      <Cases />
      <Contact />
      {/* <MoreInformation /> */}
    </>
  )
}
import styles from './page.module.css'

import Welcome from '@/components/Welcome'
import AreasOfExpertise from '@/components/AreasOfExpertise'
import AboutMe from '@/components/AboutMe'
import Cases from '@/components/Cases'

export default function Home() {
  return (
    <>
      <Welcome />
      <AreasOfExpertise />
      <AboutMe />
      <Cases />
    </>
  )
}
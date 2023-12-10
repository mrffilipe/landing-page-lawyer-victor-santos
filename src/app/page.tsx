import styles from './page.module.css'

import Welcome from '@/components/Welcome'
import AreasOfExpertise from '@/components/AreasOfExpertise'

export default function Home() {
  return (
    <>
      <Welcome />
      <AreasOfExpertise />
    </>
  )
}
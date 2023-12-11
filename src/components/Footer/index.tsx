import styles from './styles.module.css'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <span>Victor Santos</span>
            </div>
            <div className={styles.reserved}>
                <p>Copyright © Victor Santos - 2023</p>
                <p>Desenvolvido por <Link href='https://enterprisecorporate.com' target='_blank'>Enterprise</Link></p>
            </div>
        </section>
    )
}

export default Footer
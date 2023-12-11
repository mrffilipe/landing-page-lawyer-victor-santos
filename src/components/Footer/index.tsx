import styles from './styles.module.css'

import Image from 'next/image'
import Link from 'next/link'

import InstagramIcon from '@/assets/svg/instagram.svg'

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <span>Victor Santos</span>
            </div>
            <div className={styles.social_medias}>
                <Link href='/' target='_blank'>
                    <Image src={InstagramIcon} alt='Icons8 Instagram' />
                </Link>
                <Link href='/' target='_blank'>
                    <Image src={InstagramIcon} alt='Icons8 Instagram' />
                </Link>
                <Link href='/' target='_blank'>
                    <Image src={InstagramIcon} alt='Icons8 Instagram' />
                </Link>
            </div>
            <div className={styles.reserved}>
                <p>Copyright © Victor Santos - 2023</p>
                <p>Desenvolvido por <Link href='https://enterprisecorporate.com' target='_blank'>Enterprise</Link></p>
            </div>
        </section>
    )
}

export default Footer
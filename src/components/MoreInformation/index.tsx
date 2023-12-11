import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

import InstagramIcon from '@/assets/svg/instagram.svg'

const MoreInformation = () => {
    return (
        <section className={styles.more_information}>
            <div className={styles.info}>
                <span>Endereço</span>
                <p>Rua Jamel Cecílio N45</p>
            </div>
            <div className={styles.info}>
                <span>Endereço</span>
                <p>Rua Jamel Cecílio N45</p>
            </div>
            <div className={styles.info}>
                <span>Endereço</span>
                <p>Rua Jamel Cecílio N45</p>
            </div>
            <div className={styles.info}>
                <span>Endereço</span>
                <p>Rua Jamel Cecílio N45</p>
            </div>
            <div className={styles.info}>
                <span>Mídias sociais</span>
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
            </div>
        </section>
    )
}

export default MoreInformation
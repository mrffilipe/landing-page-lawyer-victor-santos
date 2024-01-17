import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

import InstagramIcon from '@/assets/svg/instagram.svg'

const MoreInformation = () => {
    return (
        <section className={styles.more_information}>
            <div className={styles.info}>
                <span>Endereço</span>
                <p>
                    R. Deodoro Veiga, Nº 56, C<br />
                    Centro<br />
                    Pires do Rio, GO
                </p>
                {/* <p>R. Deodoro Veiga, Nº 56, C - Centro, Pires do Rio - GO</p> */}
            </div>
            <div className={styles.info}>
                <span>Telefone</span>
                <p>(64) 9 9262-4222</p>
            </div>
            <div className={styles.info}>
                <span>E-mail</span>
                <p>victor.santosadvogado@gmail.com</p>
            </div>
            <div className={styles.info}>
                <span>Horário comercial</span>
                <p>Seg à Sex: 09:00 - 17:30</p>
            </div>
            <div className={styles.info}>
                <span>Mídias sociais</span>
                <div className={styles.social_medias}>
                    <Link href='https://instagram.com/adv_victor?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>
                        <Image src={InstagramIcon} alt='Icons8 Instagram' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MoreInformation
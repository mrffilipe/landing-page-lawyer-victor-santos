import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image'

import InstagramIcon from '@/assets/svg/instagram.svg'

type Props = {}

const SocialMedias = (props: Props) => {
    return (
        <li className={styles.social_medias}>
            <span>Mídias sociais</span>
            <Link href='https://instagram.com/adv_victor?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>
                <Image src={InstagramIcon} alt='Icons8 Instagram' />
            </Link>
        </li>
    )
}

export default SocialMedias
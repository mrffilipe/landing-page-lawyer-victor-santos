import styles from './styles.module.css'

import Image from 'next/image'

import TrophyIcon from '@/assets/svg/trophy.png'

const Cases = () => {
    return (
        <section className={styles.cases}>
            <div className={styles.case}>
                <Image src={TrophyIcon} alt='Icons8 Trophy' />
                <div className={styles.result}>
                    <span>Casos de sucesso</span>
                    <p>96%</p>
                </div>
            </div>
            <div className={styles.case}>
                <Image src={TrophyIcon} alt='Icons8 Trophy' />
                <div className={styles.result}>
                    <span>Casos de sucesso</span>
                    <p>96%</p>
                </div>
            </div>
            <div className={styles.case}>
                <Image src={TrophyIcon} alt='Icons8 Trophy' />
                <div className={styles.result}>
                    <span>Casos de sucesso</span>
                    <p>96%</p>
                </div>
            </div>
            <div className={styles.case}>
                <Image src={TrophyIcon} alt='Icons8 Trophy' />
                <div className={styles.result}>
                    <span>Casos de sucesso</span>
                    <p>96%</p>
                </div>
            </div>
        </section>
    )
}

export default Cases
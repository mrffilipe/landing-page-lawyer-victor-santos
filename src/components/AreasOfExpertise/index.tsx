import styles from './styles.module.css'

import Image from 'next/image'

import BusinessIcon from '@/assets/svg/business.png'

const AreasOfExpertise = () => {
    return (
        <section className={styles.areas_expertise}>
            <h1>Principais áreas de atuação</h1>
            <p>Lorem ipsum</p>
            <div className={styles.areas}>
                <div className={styles.area}>
                    <div className={styles.icon}>
                        <Image src={BusinessIcon} alt='Business Icons8' />
                    </div>
                    <span>Coorporativo</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mauris non diam sodales ultricies. Praesent malesuada auctor justo.
                    </p>
                </div>
                <div className={styles.area}>
                    <div className={styles.icon}>
                        <Image src={BusinessIcon} alt='Business Icons8' />
                    </div>
                    <span>Coorporativo</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mauris non diam sodales ultricies. Praesent malesuada auctor justo.
                    </p>
                </div>
                <div className={styles.area}>
                    <div className={styles.icon}>
                        <Image src={BusinessIcon} alt='Business Icons8' />
                    </div>
                    <span>Coorporativo</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mauris non diam sodales ultricies. Praesent malesuada auctor justo.
                    </p>
                </div>
                <div className={styles.area}>
                    <div className={styles.icon}>
                        <Image src={BusinessIcon} alt='Business Icons8' />
                    </div>
                    <span>Coorporativo</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mauris non diam sodales ultricies. Praesent malesuada auctor justo.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AreasOfExpertise
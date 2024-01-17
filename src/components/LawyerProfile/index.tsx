import styles from './styles.module.css'

import LinkButton from '../LinkButton'

const LawyerProfile = () => {
    return (
        <section className={styles.lawyer_profile}>
            <div className={styles.mask}>
                <div className={styles.description}>
                    <h1>
                        Confiança<br />
                        em cada <span>decisão</span>
                    </h1>
                    <p>
                        Comprometido com a excelência, cada caso é abordado com dedicação única. Explore como posso orientar você nas decisões jurídicas.
                    </p>
                    <LinkButton
                        value='Entre em contato'
                        href='/'
                        className={styles.button} />
                </div>
            </div>
        </section>
    )
}

export default LawyerProfile
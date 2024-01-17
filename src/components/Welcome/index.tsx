import styles from './styles.module.css'

import Header from '../Header'
import LinkButton from '../LinkButton'

const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <div className={styles.mask}>
                <Header />
                <div className={styles.text}>
                    <h1>
                        Confiança<br />
                        em cada <span>decisão</span>
                    </h1>
                    <p>
                        Comprometido com a excelência, cada caso é abordado com dedicação única. Explore como posso orientar você nas decisões jurídicas.
                    </p>
                    <LinkButton value='Entre em contato' href='/' className={styles.button} />
                </div>
            </div>
        </section>
    )
}

export default Welcome
import styles from './styles.module.css'

import Image from 'next/image'

import TrophyIcon from '@/assets/svg/trophy.png'

const Cases = () => {
    return (
        <section className={styles.cases}>
            <div className={styles.case}>
                <Image src={TrophyIcon} alt='Icons8 Trophy' />
                <div className={styles.result}>
                    <span>Imóveis Regularizados</span>
                    <p>Mais de 54 em Goiás</p>
                </div>
            </div>
            <div className={styles.case}>
                <Image src={TrophyIcon} alt='Icons8 Trophy' />
                <div className={styles.result}>
                    <span>Sucesso em Processos Trabalhistas</span>
                    <p>90% de êxito</p>
                </div>
            </div>
            <div className={styles.case}>
                <Image src={TrophyIcon} alt='Icons8 Trophy' />
                <div className={styles.result}>
                    <span>Ações de Cobrança Bem-Sucedidas</span>
                    <p>195+ casos resolvidos</p>
                </div>
            </div>
            <div className={styles.case}>
                <Image src={TrophyIcon} alt='Icons8 Trophy' />
                <div className={styles.result}>
                    <span>Eficiência em Usucapião</span>
                    <p>Êxito em mais de 80%</p>
                </div>
            </div>
        </section>
    )
}

export default Cases
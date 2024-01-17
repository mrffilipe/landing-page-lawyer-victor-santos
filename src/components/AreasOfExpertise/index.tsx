import styles from './styles.module.css'

import Image from 'next/image'

import BusinessIcon from '@/assets/svg/business.png'

const AreasOfExpertise = () => {
    return (
        <section className={styles.areas_expertise}>
            <h1>Principais áreas de atuação</h1>
            <p>
                Conheça as áreas em que atuo com profundidade e expertise, oferecendo soluções jurídicas personalizadas e dedicadas.
            </p>
            <div className={styles.areas}>
                <div className={styles.area}>
                    <div className={styles.icon}>
                        <Image src={BusinessIcon} alt='Business Icons8' />
                    </div>
                    <span>Direito do Trabalho</span>
                    <p>
                        Assessoria em questões trabalhistas, incluindo contratos, rescisões e ações por direitos.
                    </p>
                </div>
                <div className={styles.area}>
                    <div className={styles.icon}>
                        <Image src={BusinessIcon} alt='Business Icons8' />
                    </div>
                    <span>Direito Civil</span>
                    <p>
                        Soluções em regularização de imóveis, inventários, usucapião e adjudicação compulsória.
                    </p>
                </div>
                <div className={styles.area}>
                    <div className={styles.icon}>
                        <Image src={BusinessIcon} alt='Business Icons8' />
                    </div>
                    <span>Direito Público</span>
                    <p>
                        Representação em licitações, contratos administrativos e questões urbanísticas.
                    </p>
                </div>
                <div className={styles.area}>
                    <div className={styles.icon}>
                        <Image src={BusinessIcon} alt='Business Icons8' />
                    </div>
                    <span>Ações de Cobrança</span>
                    <p>
                        Recuperação de créditos através de ações judiciais e extrajudiciais.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AreasOfExpertise
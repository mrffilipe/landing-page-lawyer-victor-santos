import styles from './styles.module.css'

import Area from './Area'

import BusinessIcon from '@/assets/svg/business.png'

const Experience = () => {
    return (
        <section id='experience' className={styles.experience}>
            <h1>Principais áreas de atuação</h1>
            <p>
                Conheça as áreas em que atuo com profundidade e expertise, oferecendo soluções jurídicas personalizadas e dedicadas.
            </p>
            <ul className={styles.areas}>
                <Area
                    title='Direito do trabalho'
                    description='Assessoria em questões trabalhistas, incluindo contratos, rescisões e ações por direitos.'
                    icon={BusinessIcon}
                    altIcon='Business Icons8'
                />
                <Area
                    title='Direito civil'
                    description='Soluções em regularização de imóveis, inventários, usucapião e adjudicação compulsória.'
                    icon={BusinessIcon}
                    altIcon='Business Icons8'
                />
                <Area
                    title='Direito público'
                    description='Representação em licitações, contratos administrativos e questões urbanísticas.'
                    icon={BusinessIcon}
                    altIcon='Business Icons8'
                />
                <Area
                    title='Ações de cobrança'
                    description='Recuperação de créditos através de ações judiciais e extrajudiciais.'
                    icon={BusinessIcon}
                    altIcon='Business Icons8'
                />
            </ul>
        </section>
    )
}

export default Experience
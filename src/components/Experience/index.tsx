import styles from './styles.module.css'

import Area from './Area'

import BusinessIcon from '@/assets/img/business.png'
import CivilRightIcon from '@/assets/img/civil_right.png'
import LawIcon from '@/assets/img/law.png'
import ChargeIcon from '@/assets/img/charge.png'

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
                    icon={CivilRightIcon}
                    altIcon='Business Icons8'
                />
                <Area
                    title='Direito público'
                    description='Representação em licitações, contratos administrativos e questões urbanísticas.'
                    icon={LawIcon}
                    altIcon='Business Icons8'
                />
                <Area
                    title='Ações de cobrança'
                    description='Recuperação de créditos através de ações judiciais e extrajudiciais.'
                    icon={ChargeIcon}
                    altIcon='Business Icons8'
                />
            </ul>
        </section>
    )
}

export default Experience
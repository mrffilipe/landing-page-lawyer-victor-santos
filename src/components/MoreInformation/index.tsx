import styles from './styles.module.css'

import Info from './Info'
import SocialMedias from './SocialMedias'

const MoreInformation = () => {
    return (
        <section className={styles.more_information}>
            <ul>
                <Info
                    title='Endereço'
                    value='R. Deodoro Veiga, Nº 56, C - Centro - Pires do Rio, GO'
                />
                <Info
                    title='Telefone'
                    value='(64) 9 9262-4222'
                />
                <Info
                    title='E-mail'
                    value='victor.santosadvogado@gmail.com'
                />
                <Info
                    title='Horário comercial'
                    value='Seg à Sex: 09:00 - 17:30'
                />
                <SocialMedias />
            </ul>
        </section>
    )
}

export default MoreInformation
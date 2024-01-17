import styles from './styles.module.css'

import Case from './Case'

import TrophyIcon from '@/assets/svg/trophy.png'

const Cases = () => {
    return (
        <section className={styles.cases}>
            <h1>Cases de sucesso</h1>
            <p>Preencher esta descrição</p>
            <ul>
                <Case
                    title='Imóveis regularizados'
                    value='54+ em Goiás'
                    icon={TrophyIcon}
                    altIcon='Trophy Icons8'
                />
                <Case
                    title='Processos trabalhistas'
                    value='+90% êxito'
                    icon={TrophyIcon}
                    altIcon='Trophy Icons8'
                />
                <Case
                    title='Ações de cobrança'
                    value='195+ casos resolvidos'
                    icon={TrophyIcon}
                    altIcon='Trophy Icons8'
                />
                <Case
                    title='Eficiência em usucapião'
                    value='+80% êxito'
                    icon={TrophyIcon}
                    altIcon='Trophy Icons8'
                />
            </ul>
        </section>
    )
}

export default Cases
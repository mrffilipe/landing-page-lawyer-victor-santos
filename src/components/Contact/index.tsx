import styles from './styles.module.css'

import Button from '../Button'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.mask}>
                <h1>Obtenha uma avaliação gratuita</h1>
                <form>
                    <div className={styles.group}>
                        <label>
                            <input type="text" placeholder='Nome' />
                        </label>
                        <label>
                            <input type="text" placeholder='E-mail' />
                        </label>
                        <label>
                            <input type="text" placeholder='Telefone' />
                        </label>
                    </div>
                    <label>
                        <textarea rows={4} placeholder='Sua mensagem' />
                    </label>
                    <Button value='Enviar mensagem' className={styles.button} />
                </form>
            </div>
        </section>
    )
}

export default Contact
import styles from './styles.module.css'

import Button from '../Button'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.mask}>
                <div className={styles.text}>
                    <span>Obtenha uma avaliação gratuita</span>
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
                            <textarea rows={3} placeholder='Sua mensagem' />
                        </label>
                        <Button value='Enviar mensagem' className={styles.button} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
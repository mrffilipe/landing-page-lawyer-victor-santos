import styles from './styles.module.css'

import Button from '../Button'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.mask}>
                <div className={styles.text}>
                    <span>Obtenha uma avaliação gratuita</span>
                    <form>
                        <label>
                            <input type="text" placeholder='Nome' />
                        </label>
                        <label>
                            <input type="text" placeholder='E-mai' />
                        </label>
                        <label>
                            <input type="text" placeholder='Telefone' />
                        </label>
                        <label>
                            <textarea rows={3} placeholder='Sua mensagem' />
                        </label>
                        <input type="submit" value="" />
                        <Button value='Enviar mensagem' className={styles.button} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
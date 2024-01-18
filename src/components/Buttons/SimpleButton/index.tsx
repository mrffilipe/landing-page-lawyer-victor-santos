import styles from '../styles.module.css'

type Props = {
    className?: string,
    value: string
}

const SimpleButton = (props: Props) => {
    return (
        <div className={`${styles.button_container} ${props.className}`}>
            <button
                className={styles.button}>
                {props.value}
            </button>
        </div>
    )
}

export default SimpleButton
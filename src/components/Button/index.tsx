import styles from './styles.module.css'

type Props = {
    value: string,
    className?: string
}

const Button = (props: Props) => {
    if (!props.value) {
        props.value = Button.name
    }

    return (
        <button
            className={`${styles.button} ${props.className}`}>
            {props.value}
        </button>
    )
}

export default Button
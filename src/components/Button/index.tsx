import styles from './styles.module.css'

type Props = {
    className?: string,
    value: string
}

const Button = (props: Props) => {
    return (
        <button
            className={`${styles.button} ${props.className}`}>
            {props.value}
        </button>
    )
}

export default Button
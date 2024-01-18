import styles from './styles.module.css'

type Props = {
    title: string,
    value: string
}

const Info = (props: Props) => {
    return (
        <li className={styles.info}>
            <span>{props.title}</span>
            <p>{props.value}</p>
        </li>
    )
}

export default Info
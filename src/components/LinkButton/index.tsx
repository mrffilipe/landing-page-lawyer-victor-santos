import styles from './styles.module.css'

import Link from 'next/link'

type Props = {
    value: string,
    href: string,
    className?: string
}

const LinkButton = (props: Props) => {
    if (!props.value) {
        props.value = LinkButton.name
    }

    if (!props.href.length) {
        props.href = '/'
    }

    return (
        <Link
            href={props.href}
            className={`${styles.button} ${props.className}`}>
            {props.value}
        </Link>
    )
}

export default LinkButton
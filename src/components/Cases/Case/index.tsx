import styles from './styles.module.css'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type Props = {
    title: string,
    value: string,
    icon: string | StaticImport,
    altIcon: string
}

const Case = (props: Props) => {
    return (
        <li className={styles.case}>
            <Image src={props.icon} alt={props.altIcon} draggable={false} />
            <div className={styles.header}>
                <span>{props.title}</span>
                <p>{props.value}</p>
            </div>
        </li>
    )
}

export default Case
import styles from './styles.module.css'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type Props = {
    title: string,
    description: string,
    icon: string | StaticImport,
    altIcon: string
}

const Area = (props: Props) => {
    return (
        <li className={styles.area}>
            <div className={styles.icon}>
                <Image src={props.icon} alt={props.altIcon} />
            </div>
            <span>{props.title}</span>
            <p>{props.description}</p>
        </li>
    )
}

export default Area
'use client'

import styles from './styles.module.css'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import OpenMenuIcon from '@/assets/svg/open_menu.svg'

const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>()

    const handleOpenMenu = (): void => {
        setOpenMenu(!openMenu)
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span>Victor Santos</span>
            </div>
            <nav className={`${styles.nav} ${openMenu ? '' : styles.hiden}`}>
                {/* <nav className={`${styles.nav}`}> */}
                <ul className={styles.menu}>
                    <li>
                        <Link href='/'>Áreas</Link>
                    </li>
                    <li>
                        <Link href='/'>Sobre</Link>
                    </li>
                    <li>
                        <Link href='/'>Casos</Link>
                    </li>
                    <li>
                        <Link href='/'>Contato</Link>
                    </li>
                </ul>
            </nav>
            <button className={styles.handler_menu} onClick={handleOpenMenu}>
                <Image src={OpenMenuIcon} alt='Icons8 Menu Hamburguer' />
            </button>
        </header>
    )
}

export default Header
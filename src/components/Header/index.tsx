'use client'

import styles from './styles.module.css'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import LogoSvg from '@/assets/svg/logo.svg'
import OpenMenuIcon from '@/assets/svg/open_menu.svg'

const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>()

    const handleOpenMenu = (): void => {
        setOpenMenu(prev => !prev)
    }

    return (
        <div className={styles.header_container}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Image src={LogoSvg} alt='Logo do Dr. Victor Santos' draggable={false} />
                </div>
                <nav className={`${styles.nav} ${openMenu ? '' : styles.hiden}`}>
                    <ul className={styles.menu}>
                        <li>
                            <Link href='/#experience'>Experiência</Link>
                        </li>
                        <li>
                            <Link href='/#about'>Sobre</Link>
                        </li>
                        <li>
                            <Link href='/#cases'>Cases</Link>
                        </li>
                        <li>
                            <Link href='/#contact'>Contato</Link>
                        </li>
                    </ul>
                </nav>
                <button className={styles.handler_menu} onClick={handleOpenMenu}>
                    <Image src={OpenMenuIcon} alt='Icons8 Menu Hamburguer' />
                </button>
            </header>
        </div>
    )
}

export default Header
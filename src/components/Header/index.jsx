import styles from './Header.module.css'

import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 884)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 884)
    }

    useEffect(() => {
        window.addEventListener("resize", checkScreenSize)

        return () => {
            window.removeEventListener("resize", checkScreenSize)
        }
    }, [])

    return (
        <nav className={styles.nav}>
            <a href="#home"><img src="logo.svg" alt="Logo" className={styles.logo} /></a>
            {isMobile && (
                <button className={styles.menu} onClick={toggleMenu}>
                    <motion.img
                        src={menuOpen ? close : menu}
                        alt="Menu icon"
                        className={styles.icon}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: menuOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </button>
            )}
            <motion.ul
                className={`${styles.ul} ${menuOpen && isMobile ? styles.show : ""}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: menuOpen || !isMobile ? 1 : 0, y: menuOpen || !isMobile ? 0 : -20 }}
                transition={{ duration: 0.3 }}
            >
                <li><a href="#home" className={styles.link}>Início</a></li>
                <li><a href="#characters" className={styles.link}>Personagens</a></li>
                <li><a href="#hashiras" className={styles.link}>Hashiras</a></li>
                <li><a href="#onis" className={styles.link}>Onis</a></li>
                <li><a href="#kizuki" className={styles.link}>Kizuki</a></li>
                <li><a href="#muzan" className={styles.link}>Muzan</a></li>
            </motion.ul>
        </nav>
    )
}

export default Header
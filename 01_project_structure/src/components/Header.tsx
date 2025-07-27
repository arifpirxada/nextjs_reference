import Link from "next/link"
import styles from "./styles/header.module.css"

export default function Header () {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/todos">Todos</Link></li>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    )
}
import styles from './header.module.css';
import { BsPersonCircle } from 'react-icons/bs';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/home" className={styles.link}>
            <h1 className={styles.h1}>Adota Pet</h1>
            </Link>
            <BsPersonCircle className={styles.icon}/>
        </header>
    );
};

export default Header;
import styles from './header.module.css';
import { BsPersonCircle } from 'react-icons/bs';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
    return (
        <header className={styles.header}>
            <Link href="/home" className={styles.link}>
            <h1 className={styles.h1}>Adota Pet</h1>
            </Link>
            <Link href={"/" + router.query.user + "/info"} className={styles.link}>
            <BsPersonCircle className={styles.icon}/>
            </Link>
        </header>
    );
};

export default Header;

import styles from './home_header.module.css';
import { BsPersonCircle } from 'react-icons/bs';
import Link from 'next/link';

import {
    ButtonInverted,
    ButtonContainer,
    Input,
    FontBold,
    Errors,
} from "../pages/styles.js";

const HomeHeader = () => {
    return (
        <header className={styles.header}>
            <Link href="/home" className={styles.link}>
            <h1 className={styles.h1}>Adota Pet</h1>
            </Link>
            <ButtonContainer>
            <Link href="/cadastro" className={styles.link}>
            <ButtonInverted className={styles.button}>Cadastrar</ButtonInverted>
            </Link>
            <Link href="/login" className={styles.link}>
		    <ButtonInverted className={styles.button}>Login</ButtonInverted>
            </Link>
            </ButtonContainer>
        </header>
    );
};

export default HomeHeader;

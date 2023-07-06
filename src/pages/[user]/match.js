import Header from '../../components/header';
import styles from './match.module.css';
import { AiOutlineCheck } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Image from 'next/image';
import { useRouter } from 'next/router'

const Match = () => {
  const router = useRouter()
    const handleButtonClick = (buttonType) => {
	console.log(router.query)
        if (buttonType === '')
            setActiveButton(buttonType);
    };

    return (
        <div>
            <Header />
            <main>
                <div className={styles.container}>
                    <button
                        className={styles.preference}
                        onClick={() => handleButtonClick('preferências')}>
                        Preferências
                    </button>
                    <div className={styles.selection}>
                        <button
                            className={styles.selection_button}
                            onClick={() => handleButtonClick('nao')}>
                            <RiCloseLine />
                        </button>

                        <Image src="/cachorro.png" alt="Cachorro" width={338} height={414} />

                        <button
                            className={styles.selection_button}
                            onClick={() => handleButtonClick('sim')}>
                            <AiOutlineCheck />
                        </button>

                    </div>
                </div>
            </main>

        </div>
    );
};

export default Match;

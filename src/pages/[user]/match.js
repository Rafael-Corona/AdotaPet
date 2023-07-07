import Header from '../../components/header';
import styles from './match.module.css';
import { AiOutlineCheck } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Image from 'next/image';
import { useRouter } from 'next/router'
import dogs from '../../../public/dogs.json'
import React, { useState } from 'react';

const Match = () => {
    console.log(dogs)

    let randomDog = () => {return dogs[Math.floor(Math.random() * dogs.length)]; }

    const [dog, setDog] = useState(randomDog);

    console.log()

    const router = useRouter()
    const handleButtonClick = (buttonType) => {
        let nextDog = randomDog()
        while (nextDog == dog) {
            nextDog = randomDog()
        }
        setDog(nextDog)
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

                        <img src={dog.img} alt="Cachorro" className={styles.dog_img}/>

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

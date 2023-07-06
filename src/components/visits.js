import React, { useState } from 'react';
import dogsData from '../../public/dogs.json';
import styles from './visits.module.css';

const Visitas = () => {
    const [selectedDog, setSelectedDog] = useState(null);

    const handleButtonClick = (dog) => {
        setSelectedDog(dog);
    };

    return (
        <div className={styles.visits_menu}>
            <div className={styles.menu}>
                <h2>Cães:</h2>
                {dogsData.map((dog, index) => (
                    <button className={styles.dog_button} onClick={() => handleButtonClick(dog)}>{dog.name}</button>
                ))}
            </div>

            <div className={styles.dog_info}>
                {selectedDog && (
                    <div>
                        <h2>{selectedDog.name}</h2>
                        <img src={selectedDog.img} />
                        <p>Raça: {selectedDog.breed}</p>
                        <p>Peso: {selectedDog.weight}</p>
                        <p>Idade: {selectedDog.age}</p>
                        <button className={styles.chat}> Abrir Chat </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Visitas;

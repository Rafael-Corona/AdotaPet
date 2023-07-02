import { useState } from 'react';
import styles from './info.module.css';

const Info = () => {
    const [activeButton, setActiveButton] = useState('');

    // Função para lidar com o clique nos botões
    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    // Renderiza as informações conforme o botão clicado
    const renderInfo = () => {
        if (activeButton === 'dados') {
            return <div className={styles.info_user}>
                <h2>Meus dados</h2>
                <form>
                    <label>Nome</label>
                    <input type="text" placeholder="Nome" name="name" />

                    <label>Email</label>
                    <input type="text" placeholder="Email" name="email" />

                    <label>Telefone</label>
                    <input type="text" placeholder="Telefone" name="telefone" />

                    <label>Senha</label>
                    <input type="text" placeholder="Senha" name="senha" />

                    <button type="submit">Salvar</button>
                </form>
            </div>;
        } else if (activeButton === 'visitas') {
            return <div>Informações de visitas</div>;
        } else {
            return (
                <div className={styles.welcome}>
                    <h2>Bem-vindo(a)!</h2>
                    <p>
                        Selecione uma opção no menu para visualizar seus dados ou suas visitas.
                    </p>
                </div>
            );
        }
    };

    return (
        <main>
            <div className={styles.container}>
                <div id='a'>
                    <button
                        className={`${styles['button_info']} ${activeButton === 'dados' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('dados')}>
                        Meus dados
                    </button>
                    <button
                        className={`${styles['button_info']} ${activeButton === 'visitas' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('visitas')}>
                        Visitas
                    </button>
                </div>

                <div className={styles.info_container}>{renderInfo()}</div>
            </div>
        </main>
    );
};

export default Info;

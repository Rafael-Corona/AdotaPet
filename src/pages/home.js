import HomeHeader from '../components/home_header';
import NextJsCarousel from '../components/carousel';
import styles from './login.module.css'

export default function Home() {
        return (
                <>
                        <HomeHeader />
                        <main>
                                <div className={styles.carouselContainer}>
                                        <NextJsCarousel />
                                </div>
                        </main>
                </>
        )
}

import React from 'react';
//import styles from "./carousel.module.css";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const NextJsCarousel = () => {
    return (
        <Carousel className={styles.carouselContainer}>
            <div>
                <img className={styles.carouselImage} src="/dog1.jpg" alt="image1" />

            </div>
            <div>
                <img className={styles.carouselImage} src="/dog2.jpg" alt="image2" />

            </div>
            <div>
                <img className={styles.carouselImage} src="/dog3.jpg" alt="image3" />

            </div>
        </Carousel>
    );
};

export default NextJsCarousel;

import React from 'react';
import styles from './taxi-cost.module.css'
import ImageTaxi from '../../images/taxi.svg'
import ImageLira from '../../images/lira.svg'
import {motion} from "framer-motion";

export const TaxiCost = () => {


    return (
        <div className={styles.container}>
            <div className={styles.text__caption}>Расчет стоимости поездки</div>
            <div className={styles.container__cost}>
                <img className={styles.image__lira} src={ImageLira} alt='taxi'/>
                <motion.p
                    className="text__cost"
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        default: {
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01]
                        },
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <p className={styles.text__cost}>990</p>
                </motion.p>

            </div>
            <img src={ImageTaxi} alt='taxi'/>
        </div>
    )
}
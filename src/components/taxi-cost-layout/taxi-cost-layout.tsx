import React from "react";
import styles from "./taxi-cost-layout.module.css";
import ImageLira from "../../images/lira.svg";
import {motion} from "framer-motion";

interface ITaxiCostLayoutProps {
    readonly cost: string
}

export const TaxiCostLayout = ({cost}: ITaxiCostLayoutProps) => {

    return (
        <div className={styles.layout}>
            <img className={styles.image__lira} src={ImageLira} alt='lira'/>
            <AnimationCost cost={cost} />
        </div>
    )
}

const AnimationCost = (props: {cost: string}) => {

    return (
        <motion.p
            className={styles.text__cost}
            initial={{opacity: 0, scale: 0.4}}
            animate={{opacity: 1, scale: 1}}
            transition={{
                default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                },
                scale: {
                    type: "spring",
                    damping: 4,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}>
            {props.cost}
        </motion.p>
    )
}
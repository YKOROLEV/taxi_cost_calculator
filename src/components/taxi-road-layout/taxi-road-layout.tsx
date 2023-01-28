import React from "react";
import styles from "./taxi-road-layout.module.css"
import ImageRoadTime from "../../images/road-time.svg"
import ImageRoadDistance from "../../images/road-distance.svg"

interface ITaxiRoadLayoutProps {
    readonly type: 'road_time' | 'road_distance'
    readonly value: string
}

export const TaxiRoadLayout = ({type, value}: ITaxiRoadLayoutProps) => {

    return (
        <div className={styles.layout}>
            <TaxiRoadImage type={type}/>
            <TaxiRoadValue value={value}/>
        </div>
    )
}

const TaxiRoadImage = (props: { type: string }) => {

    const getImage = () => {
        if (props.type === 'road_time') {
            return ImageRoadTime
        } else if (props.type === 'road_distance') {
            return ImageRoadDistance
        }
    }

    return (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img className={styles.image} src={getImage()} alt='image-component'/>
    )
}

const TaxiRoadValue = (props: { value: string }) => {
    return (
        <p className={styles.text__value}>{props.value}</p>
    )
}
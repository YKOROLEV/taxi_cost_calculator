import React from "react";
import styles from "./taxi-input-layout.module.css"
import ImageInput from "../../images/road-input.svg"

interface ITaxiInputLayoutProps {
    readonly address: string
    readonly addressDestination: string
}

export const TaxiInputLayout = ({address, addressDestination}: ITaxiInputLayoutProps) => {

    return (
        <div className={styles.layout}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className={styles.image} src={ImageInput} alt='image-component'/>
            <input className={styles.input} value={address} readOnly/>
            <input className={styles.input} value={addressDestination} readOnly/>
        </div>
    )
}
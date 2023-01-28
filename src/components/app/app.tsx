import React from 'react';
import {TaxiCard} from "../taxi-card/taxi-card";
import {taxiTestData} from "../../model/taxi";
import styles from "./app.module.css"

export const App = () => {

    return (
        <div className={styles.main}>
            <div className='container-sm text-center'>
                <TaxiCard taxi={taxiTestData}/>
            </div>
        </div>
    )
}

export default App;

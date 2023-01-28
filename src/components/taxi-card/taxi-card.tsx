import React from "react";
import {TTaxi} from "../../model/taxi";
import {TaxiCostLayout} from "../taxi-cost-layout/taxi-cost-layout";
import {TaxiRoadLayout} from "../taxi-road-layout/taxi-road-layout";
import {TaxiInputLayout} from "../taxi-input-layout/taxi-input-layout";
import styles from "./taxi-card.module.css"

interface ITaxiCardProps {
    readonly taxi: TTaxi
}

export const TaxiCard = ({taxi}: ITaxiCardProps) => {
    return (
        <div>
            <div className='row text-center'>
                <div className='col-12'>
                    <p className={styles.text__caption}>Расчет стоимости поездки</p>
                </div>
                <div className='col-12'>
                    <TaxiCostLayout cost={taxi.cost}/>
                </div>
                <div className='col-6'>
                    <TaxiRoadLayout type='road_time' value={taxi.time}/>
                </div>
                <div className='col-6'>
                    <TaxiRoadLayout type='road_distance' value={taxi.distance}/>
                </div>
            </div>

            <div className='row'>
                <div className='col-12'>
                    <TaxiInputLayout {...taxi} />
                </div>
            </div>
        </div>
    )
}
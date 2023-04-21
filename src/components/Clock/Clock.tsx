import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode: 'digital' | 'analog'
}



const Clock = (props: PropsType) => {
    const [clock, setClock] = useState(new Date())

    console.log('Example')

    useEffect(() => {
        const idInterval = setInterval(() => {
            setClock(new Date())
        }, 1000)

        return () => {
            clearInterval(idInterval)
        }
    }, [])



    let view

    switch (props.mode) {
        case "analog": {
            view = <AnalogClockView date={clock}/>
            break
        }
        case "digital":
        default:
            view = <DigitalClockView date={clock}/>
    }

    return (
        <>
            <div>
                <div>
                    {view}
                </div>
            </div>
        </>
    )
};

export default Clock;

export type ClockViewPropsType = {
    date: Date
}

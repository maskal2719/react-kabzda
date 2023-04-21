import React from "react";
import {ClockViewPropsType} from "./Clock";
export const getString = (num: number) => num < 10 ? '0' + num : num
export const DigitalClockView = (props: ClockViewPropsType) => {
    return (
        <>
            {getString(props.date.getHours())}:{getString(props.date.getMinutes())}:{getString(props.date.getSeconds())}
        </>
    )
}
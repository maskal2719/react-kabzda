import React, {useState} from "react";
import {RatingValueType} from "../../App";

type RatingPropsType = {
    value: RatingValueType
    onClick : (value: RatingValueType)=> void
}

export function Rating(props: RatingPropsType) {



    return (
        <div>
            <Star selected={props.value > 0} value={1} onClick={props.onClick}/>
            <Star selected={props.value > 1}  value={2} onClick={props.onClick}/>
            <Star selected={props.value > 2}  value={3} onClick={props.onClick}/>
            <Star selected={props.value > 3}  value={4} onClick={props.onClick}/>
            <Star selected={props.value > 4}  value={5} onClick={props.onClick}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value : RatingValueType)=> void
}

function Star(props: StarPropsType) {

    return props.selected
        ?
        <span className='star' onClick={() =>props.onClick(props.value)}>&#9733;</span>
        :
        <span className='star' onClick={() =>props.onClick(props.value)}>&#9734;</span>
}
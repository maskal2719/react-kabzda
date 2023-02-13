import React, {useState} from "react";

type RatingPropsType = {
    // value: number
}

export function UncontrolledRating(props: RatingPropsType) {

    const [value, setValue] = useState(0)

    const onClickHandler = (value: number) => {
        setValue(value)
    }

    return (
        <div>
            <Star selected={value > 0} onClickHandler={() => onClickHandler(1)}/>
            <Star selected={value > 1} onClickHandler={() => onClickHandler(2)}/>
            <Star selected={value > 2} onClickHandler={() => onClickHandler(3)}/>
            <Star selected={value > 3} onClickHandler={() => onClickHandler(4)}/>
            <Star selected={value > 4} onClickHandler={() => onClickHandler(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClickHandler: () => void
}

function Star(props: StarPropsType) {

    return props.selected ? <span className='star' onClick={() => {
        props.onClickHandler()
    }}>&#9733;</span> : <span className='star' onClick={() => {
        props.onClickHandler()
    }}>&#9734;</span>

}
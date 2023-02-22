import React, {useState} from "react";

type RatingPropsType = {

}

export function UncontrolledRating(props: RatingPropsType) {

    const [value, setValue] = useState(0)


    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: ()=> void
}

function Star(props: StarPropsType) {

    return props.selected ? <span className='star' onClick={() => {
        props.setValue()
    }}>&#9733;</span> : <span className='star' onClick={() => {
        props.setValue()
    }}>&#9734;</span>

}
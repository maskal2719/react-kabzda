import React, {useMemo, useState} from "react";

export default {
    title: 'UseStateDemo'
}

function generateData() {
    console.log('generate')
    return 123512351235
}


export const Example1 = () => {
    console.log('Example')
    // const initValue =  useMemo(generateData,[])
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            <div>
                {counter}
            </div>
        </>
    )
}

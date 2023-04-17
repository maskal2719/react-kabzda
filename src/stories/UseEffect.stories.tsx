import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'UseEffect demo'
}

export const Example1 = () => {

    const [count, setCount] = useState(1)

    console.log('Example')

    useEffect(() => {
        console.log('useEffect work every')
        document.title = count.toString()
    },)

    useEffect(() => {
        console.log('useEffect work first render')
    },[])

    useEffect(() => {
        console.log('useEffect work first render and every count change')
        document.title = count.toString()
    },[count])

    return (
        <>
            <div>
                <h1>Hello {count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </>
    )
}

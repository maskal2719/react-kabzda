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
    }, [])

    useEffect(() => {
        console.log('useEffect work first render and every count change')
        document.title = count.toString()
    }, [count])

    return (
        <>
            <div>
                <h1>Hello {count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </>
    )
}

export const SetTimeOutExample2 = () => {

    const [count, setCount] = useState(1)
    const [clock, setClock] = useState(new Date())

    console.log('Example')

    useEffect(() => {

        // setTimeout(() => {
        //     document.title = count.toString()
        // },1000)


        setInterval(() => {
            setClock(new Date())
        }, 1000)

    }, [])

    return (
        <>
            <div>
                <h1>Hello {count}</h1>
                <div>
                    {`${clock.getHours()}:${clock.getMinutes()}:${clock.getSeconds()}`}
                </div>
            </div>
        </>
    )
}

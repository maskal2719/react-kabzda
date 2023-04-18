import React, {useEffect, useState} from 'react';



const Clock = () => {
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

    const getString = (num: number) => num < 10 ? '0' + num : num

    return (
        <>
            <div>
                {/*<div>*/}
                {/*    {`${getString(clock.getHours())}:${getString(clock.getMinutes())}:${getString(clock.getSeconds())}`}*/}
                {/*</div>*/}
                <Clock2/>
            </div>
        </>
    )
};

export default Clock;

export const Clock2 = () => {
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

    const getString = (num: number) => num < 10 ? '0' + num : num

    return (
        <>
            <div className={'clock'}>
                {/*<div>*/}
                {/*    {`${getString(clock.getHours())}:${getString(clock.getMinutes())}:${getString(clock.getSeconds())}`}*/}
                {/*</div>*/}
                <ul id="clock">
                    <li id="sec"></li>
                    <li id="hour"></li>
                    <li id="min"></li>
                </ul>
            </div>
        </>
    )
};

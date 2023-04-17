import React, {useEffect, useState} from 'react';



const Clock = () => {
    const [clock, setClock] = useState(new Date())

    console.log('Example')

    useEffect(() => {
        setInterval(() => {
            setClock(new Date())
        }, 1000)

    }, [])

    const getString = (num: number) => num < 10 ? '0' + num : num

    return (
        <>
            <div>
                <div>
                    {`${getString(clock.getHours())}:${getString(clock.getMinutes())}:${getString(clock.getSeconds())}`}
                </div>
            </div>
        </>
    )
};

export default Clock;
import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo123'
}

export const DifficultCounting = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }


    return (
        <>
            <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a : {resultA}
            </div>
            <div>
                Result for b : {resultB}
            </div>
        </>
    )
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Stas', 'Denis', 'Sergey', 'Igor', 'Call'])


    const newArr = useMemo(()=> {
        const newArr =  users.filter(el => el.toLowerCase().indexOf('a') > -1)
        return newArr
    }, [users])

    const addUser = () => {
        setUsers([...users, 'Sveta'])
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>addUser</button>
            {counter}
            <Users users={newArr}/>
        </>
    )
}
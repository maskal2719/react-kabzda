import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
    return (
        <div>{props.count}</div>
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


export const Example164 = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Stas', 'Denis','Sergey','Igor','Call'])

    const addUser = () => {
        setUsers([...users, 'Sveta'])
    }

    return(
    <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={addUser}>addUser</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
    )
}
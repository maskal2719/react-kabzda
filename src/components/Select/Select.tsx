import React, {FormEvent, useState} from 'react';
type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange : (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [value, setValue] = useState<any>(props.value)
    const [status, setStatus] = useState<boolean>(false)

    const onChange = (value: any) => {
        setValue(value)
        setStatus(false)
    }
    const select = {
        width: '60px',
        border: '1px solid black',
        color: 'red'
    }
    const option = {
        width: '60px',
        backgroundColor: 'yellow',
        border: '1px solid black',
        cursor: 'pointer'
    }


    return (
        <div>
            <div style={select} onClick={() => setStatus(true)}>{props.items.find(el=> el.value === value)?.title}</div>
            { status && props.items.map(el => (<div style={option} key={el.value} onClick={() => onChange(el.value)}>{el.title}</div>))}
        </div>
    );
};


import React, {FormEvent, useEffect, useState} from 'react';
import classes from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [value, setValue] = useState<any>(props.value)
    const [status, setStatus] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value])

    const onChange = (value: any) => {
        setValue(value)
        setStatus(false)
    }
    // const select = {
    //     width: '60px',
    //     border: '1px solid black',
    //     color: 'red'
    // }
    // const option = {
    //     width: '60px',
    //     backgroundColor: 'yellow',
    //     border: '1px solid black',
    //     cursor: 'pointer'
    // }

    const selectedItem = props.items.find(el => el.value === value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)
    const onClickHandler = () => setStatus(!status)
    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendent = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendent) {
                        setValue(pretendent.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                setValue(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setStatus(false)
        }

    }

    return (
        <div className={classes.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={classes.main} onClick={onClickHandler}>{selectedItem && selectedItem.title}</span>

            {status &&
                <div className={classes.items}>
                    {props.items.map(el => (
                        <div className={classes.item + ' ' + (hoveredItem === el ? classes.selected : '')}
                             key={el.value} onClick={() => onChange(el.value)}
                             onMouseEnter={() => setHoveredElementValue(el.value)}
                        >{el.title}
                        </div>
                    ))}
                </div>
            }


        </div>
    );
};


import React, {FormEvent, useMemo, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'SelectHW',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args


// export const AccordionState: ComponentStory<typeof Accordion> = (args) => {
//     const [col, setCol] = useState<boolean>(true)
//
//     return <Accordion onClick={(value)=>{alert(value)}} items={[{title:'Stas', value: 612341},{title:'Denis', value: 654675467},]} value={col} titleValue={'Users'} setCollapsed={() => setCol(!col)}/>;
// }

export const SelectHW: ComponentStory<typeof Select> = (args) => {

    const [city, setCity] = useState([
        {title: 'Gomel', value: 1, country: 'RB'},
        {title: 'Brest', value: 2, country: 'RB'},
        {title: 'Moscow', value: 3, country: 'RF'},
        {title: 'Piter', value: 4, country: 'RF'},
        {title: 'Kiev', value: 5, country: 'UKR'},
        {title: 'Slonim', value: 6, country: 'RB'},
        {title: 'Harkov', value: 7, country: 'UKR'},
    ])

    const [counter, setCounter] = useState(0)

    const filterByRB = useMemo(() => {
        let arr = city.filter(el => el.country === 'RB')
        return arr
    }, [city])
    const filterByRF = useMemo(() => {
        let arr = city.filter(el => el.country === 'RF')
        return arr
    }, [city])
    const filterByUKR = useMemo(() => {
        let arr = city.filter(el => el.country === 'UKR')
        return arr
    }, [city])

    console.log('CITIES')

    return (
        <div style={{display: 'flex', gap: '20px'}}>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <Select
                onChange={() => action('edit')}
                items={filterByRB}/>

            <Select
                onChange={() => action('edit')}
                items={filterByRF}/>

            <Select
                onChange={() => action('edit')}
                items={filterByUKR}/>

            <div>{counter}</div>

        </div>
    )

}
export const SelectHW1: ComponentStory<typeof Select> = (args) => {


    return <Select
        onChange={() => action('edit')}
        items={[
            {title: 'Stas', value: 1},
            {title: 'Denis', value: 2},
            {title: 'Oleg', value: 3},
            {title: 'Igor', value: 4},
            {title: 'Jeny', value: 5},
            {title: 'Tima', value: 6},
            {title: 'Any', value: 7},
        ]
        }/>
}




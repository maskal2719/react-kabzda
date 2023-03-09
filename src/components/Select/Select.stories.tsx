import React, {FormEvent, useState} from 'react';
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


    return <Select
        value={1}
        onChange={()=> action('edit')}
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




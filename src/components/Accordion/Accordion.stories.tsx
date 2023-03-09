import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args




export const AccordionDefaultCol: ComponentStory<typeof Accordion> = () => <Accordion onClick={()=>{}} items={[{title:'Stas', value: 612341},{title:'Denis', value: 654675467},]} value={true} titleValue={'Users'} setCollapsed={action('collapsed')}/>;
export const AccordionDefaultUncol: ComponentStory<typeof Accordion> = () => <Accordion onClick={()=>{}} items={[{title:'Stas', value: 612341},{title:'Denis', value: 654675467},]} value={false} titleValue={'Tasks'} setCollapsed={action('uncollapsed')}/>;

export const AccordionState: ComponentStory<typeof Accordion> = (args) => {
    const [col, setCol] = useState<boolean>(true)

 return <Accordion onClick={(value)=>{alert(value)}} items={[{title:'Stas', value: 612341},{title:'Denis', value: 654675467},]} value={col} titleValue={'Users'} setCollapsed={() => setCol(!col)}/>;
}




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




export const AccordionDefaultCol: ComponentStory<typeof Accordion> = () => <Accordion value={true} titleValue={'Dimon gey'} setCollapsed={action('collapsed')}/>;
export const AccordionDefaultUncol: ComponentStory<typeof Accordion> = () => <Accordion value={false} titleValue={'Dimon gey'} setCollapsed={action('uncollapsed')}/>;

export const AccordionState: ComponentStory<typeof Accordion> = (args) => {
    const [col, setCol] = useState<boolean>(true)
 return <Accordion value={col} titleValue={'Dimon gey'} setCollapsed={() => setCol(!col)}/>;
}




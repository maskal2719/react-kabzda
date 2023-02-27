import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args


export const On: ComponentStory<typeof OnOff> = (args) => <OnOff value={true} callback={action('clicked true')}/>;
export const Off: ComponentStory<typeof OnOff> = (args) => <OnOff value={false} callback={action('clicked off')}/>;



export const ModeChanging: ComponentStory<typeof OnOff> = (args) => {
    const [status, setStatus] = useState<boolean>(true)
    return <OnOff value={status} callback={setStatus}/>;
}




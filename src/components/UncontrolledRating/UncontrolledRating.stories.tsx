import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "./UncontrolledRating";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledRating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args


export const On: ComponentStory<typeof UncontrolledRating> = () => <UncontrolledRating/>;




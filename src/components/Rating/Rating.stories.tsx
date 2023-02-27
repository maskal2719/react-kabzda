import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating} from "./Rating";
import {RatingValueType} from "../../App";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating stories',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const EmptyStats: ComponentStory<typeof Rating> = (args) => <Rating value={0} onClick={x => x}  />;
export const Rating1: ComponentStory<typeof Rating> = (args) => <Rating value={1} onClick={x => x}  />;
export const Rating2: ComponentStory<typeof Rating> = (args) => <Rating value={2} onClick={x => x}  />;
export const Rating3: ComponentStory<typeof Rating> = (args) => <Rating value={3} onClick={x => x}  />;
export const Rating4: ComponentStory<typeof Rating> = (args) => <Rating value={4} onClick={x => x}  />;

export const ChangeRating = () => {
    const [rating,setRating] = useState<RatingValueType>(0)
    return <Rating value={rating} onClick={setRating}/>
}



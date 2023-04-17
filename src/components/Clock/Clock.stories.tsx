import {Rating} from "../Rating/Rating";
import {ComponentMeta} from "@storybook/react";
import Clock from "./Clock";

export default {
    title: 'Clock stories',
    component: Clock,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

export const ClockStories = () => {
    return (
        <Clock/>
    )
}
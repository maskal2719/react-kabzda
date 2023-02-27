import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    setCollapsed: ()=> void
    value: boolean
}

export function Accordion(props: AccordionPropsType) {



    // if (props.collapsed) {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.titleValue}/>
    //         </div>
    //     )
    // } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} value={props.value}/>
                {!props.value && <AccordionBody/>}
            </div>
        )


}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: ()=> void
    value: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.setCollapsed()}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

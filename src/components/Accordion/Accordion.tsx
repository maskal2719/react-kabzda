import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string
    setCollapsed: ()=> void
    value: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

        return (
            <div>
                <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} value={props.value}/>
                {!props.value && <AccordionBody onClick={props.onClick} items={props.items}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el,index) => (<li onClick={() =>{props.onClick(el.value)}} key={index}>{el.title}</li>))}
        </ul>
    )
}

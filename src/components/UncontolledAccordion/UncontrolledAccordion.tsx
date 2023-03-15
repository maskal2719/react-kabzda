import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    // const [collapsed, setCollapsed] = useState(true)
    const [collapsed, dispatch] = useReducer(reducer,{collapsed: true})

    // const onClickHandler = (collapsed: boolean) => {
    //     setCollapsed(collapsed)
    // }

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} collapsed={() => onClickHandler(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} collapsed={() => dispatch({type: TOGGLE_CONSTANT})}/>
            {!collapsed.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.collapsed()
        }}>{props.title}</h3>
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

import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

export type RatingValueType = 0|1|2|3|4|5

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsedValue, setCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false)

    console.log(collapsedValue)

    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<Accordion titleValue={'This is FIRST ACCORDION'} collapsed={true}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={5}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<PageTitle title={'This is TEST'}/>*/}
            {/*<Accordion titleValue={'This is SECOND ACCORDION'} collapsed={false}/>*/}
            {/*<OnOff status={true}/>*/}
            {/*<OnOff status={false}/>*/}
            {/*<OnOff status={true}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<UncontrolledAccordion titleValue={'Первый'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Второй'}/>*/}

            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion value={collapsedValue} titleValue={'123123231'} setCollapsed={() =>setCollapsed(!collapsedValue)}/>
            <UncontrolledAccordion titleValue={'2222222222222'}/>
            <OnOff value={on} callback={setOn}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;

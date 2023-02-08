import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";


function App() {
    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Accordion titleValue={'This is FIRST ACCORDION'} collapsed={true}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<PageTitle title={'This is TEST'}/>*/}
            {/*<Accordion titleValue={'This is SECOND ACCORDION'} collapsed={false}/>*/}
            <OnOff status={true}/>
            <OnOff status={false}/>
            <OnOff status={true}/>
            <OnOff status={false}/>
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

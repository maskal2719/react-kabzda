import React from 'react';

type OnOffPropsType = {
    status: boolean
}

const OnOff = (props: OnOffPropsType) => {
    return (
        <div className='main'>
            <div className={props.status ? "green" : ""}>On</div>
            <div className={!props.status ? "red" : ""}>Off</div>
            <div className={props.status ? "circle green" : "circle red"}></div>
        </div>
    );
};

export default OnOff;
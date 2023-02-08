import React from 'react';

type OnOffPropsType = {
    status: boolean
}

const OnOff = (props: OnOffPropsType) => {
    return (
        <div className='main'>
            {
                props.status &&
                <>
                    <div className='on'>On</div>
                    <div className='off void'>Off</div>
                    <div className='circle green'></div>
                </>
            }
            {!props.status &&
                <>
                    <div className='on void'>On</div>
                    <div className='off'>Off</div>
                    <div className='circle red'></div>
                </>
            }
        </div>

    );
};

export default OnOff;
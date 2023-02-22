import React, {useState} from 'react';

const OnOff = () => {

    const [on, setOn] = useState(false)


    const user = ['3123','51235']

    const onStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: !on ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    function getUser (user: any){
        return (
            <li>{user}</li>
        )
    }




    const onClickHandler = (status: boolean) => {
        setOn(status)
    }



    return (
        // <div className='main'>
        //     <div className={props.status ? "green" : ""}>On</div>
        //     <div className={!props.status ? "red" : ""}>Off</div>
        //     <div className={props.status ? "circle green" : "circle red"}></div>
        // </div>

        <div>
            <div onClick={() => onClickHandler(true)} style={onStyle}>On</div>
            <div onClick={() => onClickHandler(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
            <div>{user.map(getUser)}</div>
        </div>
    );
};

export default OnOff;
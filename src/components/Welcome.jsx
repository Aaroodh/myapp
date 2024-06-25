import React from 'react';
import moment from 'moment';
import {Test} from "./test";
const Welcome = ()=>{
    return(
        <>
            <Test />
            <p> {moment(undefined,['DD-MMM-YY']).format('DD-MM-YY')} </p>
        </>
    )   
}

export default Welcome;
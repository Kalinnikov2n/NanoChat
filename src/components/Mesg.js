import React, { Component } from 'react';


const Mesg= (props) => {
    return(
        <div>
           {props.message.text}
        </div>
    )
}

export default Mesg;
import React, { Component } from 'react';


const Mesg= (props) => {
    const clientMessage = {
        maxWidth: '45%',
        borderRadius: '30px',
        padding: '20px 0',
        backgroundColor: ' rgb(255, 255, 255)',
        margin: '5px 5px 5px auto',
    }

    const botMessage = {
        maxWidth: '45%',
        borderRadius: '30px',
        padding: '20px 0',
        backgroundColor: ' rgb(255, 255, 255)',
        margin: '5px auto 5px 5px',
    }
    return(
        <div>
        {props.message.owner === "bot" ? 
         <div style={botMessage}>
        {props.message.text}
     </div> :
     <div style={clientMessage}>
           {props.message.text}
        </div> }
        </div>
    )
}

export default Mesg;
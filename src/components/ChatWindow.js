import React, { Component } from 'react';
import Mesg from './Mesg';
const regeneratorRuntime =  require("regenerator-runtime");



class ChatWindow extends Component {
    render(){
        return(
            <div>
                <Mesg/>
            </div>
        )
    }
}

export default ChatWindow;
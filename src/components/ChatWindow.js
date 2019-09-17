import React, { Component } from 'react';
import Mesg from './Mesg';
const regeneratorRuntime =  require("regenerator-runtime");



class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          uuid:"", 
          cuid: '', 
          history: [{}],
          inputMesg: '',
        }
      }
    render(){
        return(
            <div>
                <Mesg/>
            </div>
        )
    }
}

export default ChatWindow;
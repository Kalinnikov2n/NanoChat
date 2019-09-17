import React, { Component } from 'react';
const regeneratorRuntime =  require("regenerator-runtime");


class ChatWindow extends Component {
    reg = async() =>{
        console.log("find!!")
    }
  render(){
      return(
      <div onClick={this.reg}>
          REGENERATOR ТЕПЕРЬ НАЙДЕН!
      </div>
      )
  }
}

export default ChatWindow;
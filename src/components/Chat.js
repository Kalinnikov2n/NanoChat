import React, { Component } from "react";
import ChatWindow from "./ChatWindow";
import ClientForm from "./ClientForm";
import {addHistory} from "../redux/actions"
import {connect} from 'react-redux'

class Chat extends Component {
    componentDidMount =  async() =>{
        if(localStorage.getItem("history")){
            const history = JSON.parse(localStorage.getItem("history"))
            await this.props.addHistory(history)
        }
    }
    reverse = ()=>{
        localStorage.clear()
        location.reload()
    }
    render() {
        return (
            <div className="Chat">
            <div >
                <ChatWindow/>
                <ClientForm/>
            </div>
            <input className="Reverse" onClick={this.reverse} type="submit" value="reverse"/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        addHistory: (history) => dispatch(addHistory(history))
    }
  }
  
  export default connect(null, mapDispatchToProps)(Chat)
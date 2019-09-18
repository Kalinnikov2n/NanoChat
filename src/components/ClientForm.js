import React, { Component } from "react";
const regeneratorRuntime =  require("regenerator-runtime");
import '../public/styles/index.css';
import { async } from "regenerator-runtime";
import sendMessage from "../public/js/sendMessage";
import {connect} from 'react-redux';
import {addBotMes, addClientMes} from "../redux/actions"



class ClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    inputChange = (e) => {
        this.setState({ message: e.target.value })
    }

    sendMes = async () => {
        if(this.state.message){
        await this.props.addClientMes(this.state.message)
        const answer = await sendMessage(this.state.message, this.props.cuid)
        await this.props.addBotMes(answer)
        const history = JSON.stringify(this.props.history)
        localStorage.setItem("history", history)
        this.setState({ message: "" })
        }
    }

    render() {
        return (
            <div className="Form">
                <input className="Input" onChange={this.inputChange} value={this.state.message} placeholder="write something" />
                <input  className="Submit" onClick={this.sendMes} type="submit" value="Ask" />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    cuid: state.cuid,
    history: state.history
  })
  
  function mapDispatchToProps(dispatch){
    return {
        addBotMes: (text) => dispatch(addBotMes(text)),
        addClientMes: (text) => dispatch(addClientMes(text))

    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ClientForm)
  
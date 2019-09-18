import React, { Component } from "react";
import '../public/styles/index.css';
import { async } from "regenerator-runtime";



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
        console.log(this.state.message);
        this.setState({ message: "" })
    }

    render() {
        return (
            <div>
                <input onChange={this.inputChange} value={this.state.message} placeholder="write something" />
                <input onClick={this.sendMes} type="submit" value="Ask" />
            </div>
        );
    }
}

export default ClientForm;
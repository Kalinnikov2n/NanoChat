import React, { Component } from "react";
import '../public/styles/index.css';
import ChatWindow from "./ChatWindow";
import ClientForm from "./ClientForm";

class Chat extends Component {
    render() {
        return (
            <div>
                <ChatWindow/>
                <ClientForm/>
            </div>
        );
    }
}

export default Chat;
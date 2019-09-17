import React, { Component } from "react";
import '../public/styles/index.css';
import ChatWindow from "./ChatWindow";

class App extends Component {
    render() {
        return (
            <div>
                <ChatWindow/>
            </div>
        );
    }
}

export default App;
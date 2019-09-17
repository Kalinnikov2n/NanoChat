import React, { Component } from 'react';
import Mesg from './Mesg';
const regeneratorRuntime =  require("regenerator-runtime");
import getCuid from '../public/js/getCuid';
import { async } from 'regenerator-runtime';



class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          uuid:"772c9859-4dd3-4a0d-b87d-d76b9f43cfa4", 
          cuid: '', 
          history: [{}],
          inputMesg: '',
        }
      }
    componentDidMount = async()=>{
        const cuid = await getCuid(this.state.uuid)
        await this.setState({cuid: cuid})
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
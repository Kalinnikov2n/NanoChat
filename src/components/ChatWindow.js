import React, { Component } from 'react';
import Mesg from './Mesg';
import {connect} from 'react-redux'
const regeneratorRuntime =  require("regenerator-runtime");
import getCuid from '../public/js/getCuid';
import getWelcomeMessage from '../public/js/getWelcomeMessage';
import { async } from 'regenerator-runtime';
import {addCuid, addBotMes} from "../redux/actions"



class ChatWindow extends Component {

    componentDidMount = async()=>{
      
        const cuid = await getCuid(this.props.uuid);
        await this.props.addCuid(cuid);
        const welcomeMessage = await getWelcomeMessage(cuid);
        await this.props.addBotMes(welcomeMessage);
    }

    render(){
        return(
            <div>
                {this.props.history ?
                this.props.history.map((el, i) => <Mesg message={el} key={i}/>) : null
            }
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    uuid: state.uuid,
    history: state.history,
    cuid: state.cuid
  })
  
  function mapDispatchToProps(dispatch){
    return {
        addCuid: (cuid) => dispatch(addCuid(cuid)),
        addBotMes: (text) => dispatch(addBotMes(text))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow)
  
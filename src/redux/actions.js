import {ADD_CUID, ADD_BOT_MES, ADD_CLIENT_MES, ADD_HISTORY} from './types'

const addCuid = (cuid) => {
    return {
      type: ADD_CUID,
      cuid: cuid
    }
  };
  
  const addBotMes= (text) => {
    return {
      type: ADD_BOT_MES,
      text: text
    }
  };
   
  const addClientMes = (text) => {
    return {
      type: ADD_CLIENT_MES,
      text: text
    }
  };
  
const addHistory = (history) =>{
  return{
    type : ADD_HISTORY,
    history: history
  }
}
  
  
  
  export {addCuid, addBotMes, addClientMes, addHistory };
  
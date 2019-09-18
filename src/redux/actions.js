import {ADD_CUID, ADD_BOT_MES, ADD_CLIENT_MES} from './types'

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
  
  
  
  export {addCuid, addBotMes, addClientMes };
  
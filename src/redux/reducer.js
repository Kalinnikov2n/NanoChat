import {ADD_CUID, ADD_BOT_MES, ADD_CLIENT_MES} from './types'

const initialState = {
    uuid:"772c9859-4dd3-4a0d-b87d-d76b9f43cfa4", 
    cuid: '', 
    history: [],
};

export default function(state = initialState, action) {
    switch (action.type){
        case ADD_CUID: {
            return {
              ...state,
              cuid: action.cuid
            };
          }
          case ADD_BOT_MES:{
            return {
              ...state,
              history : [...state.history, {text: action.text, owner: "bot"}]
            }
          };
          case ADD_CLIENT_MES:{
            return {
                ...state,
                history : [...state.history, {text: action.text, owner: "client"}]
            }
          }
          default:
            return state;
    }
}

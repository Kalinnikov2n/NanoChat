import React from "react";
import ReactDOM from "react-dom";
import App from '../../components/App'
const regeneratorRuntime =  require("regenerator-runtime");
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../../redux/reducer'



const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));




import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
// const initialState  = {
//   count:40
// }



const Store =  createStore(reducer);

Store.subscribe( () => {
  console.log('store updated',Store.getState());
})

Store.dispatch({type: "INCREMENT",payload:10});

ReactDOM.render(
  <Provider store={Store}>
    <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

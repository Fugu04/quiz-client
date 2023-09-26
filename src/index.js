import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux'
// import { Provider } from 'react-redux';

import './index.css';
import App from './App';

// const defaultState = {
//   cash: 0,
// }

// const reducer = (state = defaultState, action) => {
//   switch(action.type){
//     case "ADD_CASH":
//       return { ...state, cash: state.cash + action.payload}
//     case "GET_CASH":
//       return { ...state, cash: state.cash + action.payload}
//     default:
//       return state
//   }
// }

// const store = createStore()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Provider store = {store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    // </Provider>
);



import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import {Provider, } from 'react-redux'
import {createStore, combineReducers} from 'redux'
import userReducer from './features/users/reducer';
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  user:userReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

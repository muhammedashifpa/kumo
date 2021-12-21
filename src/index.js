import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import {Provider, } from 'react-redux'
import {createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './features/users/reducer';
import favouriteReducer from './features/favourite/reducer'
import cartReducer from './features/cart/reducer'
import { persistStore, persistReducer,persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import snackbarReducer from "./features/ducks/snackbar";
import ProductViewModalReducer from "./features/productViewModle/reducer"

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['fav','user'],
}


const rootReducer = combineReducers({
  user:userReducer,
  fav:favouriteReducer,
  cart:cartReducer,
  snackbar: snackbarReducer,
  pvmr: ProductViewModalReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

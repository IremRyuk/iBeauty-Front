import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Translation/i18'
import {BrowserRouter} from 'react-router-dom'
import { legacy_createStore as createStore} from 'redux'
import {Provider} from 'react-redux'
import { AllReducers } from './Redux/AllReducers';
let store = createStore(AllReducers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

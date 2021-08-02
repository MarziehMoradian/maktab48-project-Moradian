import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './assets/font/BYekan+.ttf'
import App from './App';
import { Provider } from "react-redux";
// import store from "./redux/store";
import {store , persistor} from "./redux/store";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { createMuiTheme} from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
 import { PersistGate } from 'redux-persist/integration/react';
 import { saveState } from './localStorage';
//  store.subscribe(()=>{
//    let state=store.getState().cartItems;
 
//    saveState({cartItems:state})
//  })
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
  direction: 'rtl',
});
ReactDOM.render(
  <React.StrictMode>
    <StylesProvider jss={jss}>
      <Provider store={store}>
        <Router>
           <PersistGate persistor={persistor}> 
            <App />
           </PersistGate>
        </Router>
      </Provider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



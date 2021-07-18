import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { saveState } from "./redux/store/localStorage";

import { StylesProvider, jssPreset } from '@material-ui/core/styles';
 import { createMuiTheme} from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
store.subscribe(() =>
  saveState("shoppingCart", store.getState()["shoppingCart"])
);

const theme = createMuiTheme({
  direction: 'rtl',
});
ReactDOM.render(
  <React.StrictMode>
    <StylesProvider jss={jss}>
      <Provider store={store}>
        
        <Router>
          
          <CssBaseline/>
          <App />
        </Router>
      </Provider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



import "./assets/sass/app.scss";
import Login from "./pages/LoginPage";
import AdminPanelPage from './pages/AdminPanelPage';
import { Route, Switch,Redirect } from "react-router-dom";
import React from "react";
import AppBar from './components/AppBar';
import { ProtectedRoute } from "./ProtectedRoute";
import ProductsManagement from './pages/Productsmanagement'

function App() {
  return (
    <React.Fragment>

      <Switch>
        <Route path="/login" exact component={Login}/>
         {/* <Redirect exact from="/adminPanel" to='adminPanel/productManagement' /> */}
        <Route path="/adminPanel/:page?" exact  render = {props => <AppBar {...props}/>}/>
        {/* <Route path="/managemantProduct" exact component={ProductsManagement}/> */}
      </Switch> 
     
    </React.Fragment>
  );
}

export default App;

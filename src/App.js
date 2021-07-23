
import Login from "./pages/LoginPage";
import AdminPanelPage from './pages/admin/AdminPanelPage';
import { Route, Switch} from "react-router-dom";
import React from "react";
import { ProtectedRoute } from "./ProtectedRoute";
// import Drawer from './components/Drawer';
import { connect } from "react-redux";
import MainPage from "./pages/main/MainPage";
import Headers from "./components/Headers";
import CssBaseline from '@material-ui/core/CssBaseline';
import ProductDetail from "./components/mainPageComponents/products/ProductDetail";
import Card from './components/mainPageComponents/cart/Cart'
function App() {
  return (
    <React.Fragment>
    <CssBaseline/>
       <MainPage/>
        {/* <Headers/> */}
         <Switch>
         {/* <Route path="/" exact render={props => <MainPage shoppingCart={shoppingCart}/>} />
         <Route path="/product/:productId" exact component={ProductDetail} />
         <Route path="/product/basket" exact component={Card} /> */}
         {/* <Route path="/login" exact component={Login}/>
         <ProtectedRoute exact path="/adminPanel/:page?" component={AdminPanelPage} />
        <ProtectedRoute path="/adminPanel/:page?" exact component={AdminPanelPage}/>  */}
      </Switch> 
     
    </React.Fragment>
  );
}

export default connect(state => {
  return {
    shoppingCart: state.shoppingCart
  };
})(App);

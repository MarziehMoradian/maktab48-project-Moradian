
import Login from "./pages/LoginPage";
import AdminPanelPage from './pages/admin/AdminPanelPage';
import { Route, Switch} from "react-router-dom";
import React from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import Drawer from './components/Drawer';
import MainPage from "./pages/main/MainPage";
import Headers from "./components/Headers";
import CssBaseline from '@material-ui/core/CssBaseline';
import ProductDetail from "./components/mainPageComponents/products/ProductDetail";
function App() {
  return (
    <React.Fragment>
    <CssBaseline/>
       {/* <MainPage/> */}
        {/* <Headers/> */}
         <Switch>
         <Route path="/" exact component={MainPage} />
         <Route path="/product/:productId" exact component={ProductDetail} />
         {/* <Route path="/login" exact component={Login}/>
         <ProtectedRoute exact path="/adminPanel/:page?" component={AdminPanelPage} />
        <ProtectedRoute path="/adminPanel/:page?" exact component={AdminPanelPage}/>  */}
      </Switch> 
     
    </React.Fragment>
  );
}

export default App;

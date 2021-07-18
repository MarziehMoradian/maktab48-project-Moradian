
import Login from "./pages/LoginPage";
import AdminPanelPage from './pages/AdminPanelPage';
import { Route, Switch} from "react-router-dom";
import React from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import Drawer from './components/Drawer';
import MainPage from "./pages/MainPage";
import CssBaseline from '@material-ui/core/CssBaseline';
function App() {
  return (
    <React.Fragment>
    <CssBaseline/>
       {/* <MainPage/> */}
        {/* <Drawer /> */}
        
        <Switch>
         <Route path="/login" exact component={Login}/>
    
         <ProtectedRoute exact path="/adminPanel/:page?" component={AdminPanelPage} />
         <ProtectedRoute path="/adminPanel/:page?" exact component={AdminPanelPage}/>
         
        
      
      </Switch>  
     
    </React.Fragment>
  );
}

export default App;

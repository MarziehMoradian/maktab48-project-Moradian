
import Login from "./pages/LoginPage";
import AdminPanelPage from './pages/AdminPanelPage';
import { Route, Switch} from "react-router-dom";
import React from "react";
import { ProtectedRoute } from "./ProtectedRoute";



function App() {
  return (
    <React.Fragment>

 
      <Switch>
        <Route path="/login" exact component={Login}/>
    
         <ProtectedRoute path="/adminPanel/:page?" exact component={AdminPanelPage}/>
      
      </Switch> 
     
    </React.Fragment>
  );
}

export default App;

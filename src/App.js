
import Login from "./pages/LoginPage";
import AdminPanelPage from './pages/admin/AdminPanelPage';
import { Route, Switch} from "react-router-dom";
import React,{useState,useEffect} from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { useDispatch,useSelector } from "react-redux";
// import Drawer from './components/Drawer';
import { connect } from "react-redux";
import MainPage from "./pages/main/MainPage";
import Headers from "./components/Headers";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <React.Fragment>
    <CssBaseline/>
       {/* <MainPage/> */}
        <Router>
        {/* <Headers/> */}
         <Switch>
{/*         
         <Route path="/" exact component= {MainPage} />
        
         <Route path="/login" exact component={Login}/>*/}
         <ProtectedRoute exact path="/adminPanel/:page?" component={Headers} /> 
        {/* <ProtectedRoute path="/adminPanel/:page?" exact component={AdminPanelPage}/> */}
      </Switch> 
      </Router>
     
    </React.Fragment>
  );
}

export default App

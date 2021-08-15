
import Login from "./pages/LoginPage";
import { Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import MainPage from "./pages/main/MainPage";
import CssBaseline from '@material-ui/core/CssBaseline';
import AdminPage from "./pages/admin/AdminPage";
import Carousel from './components/Carousel'

function App() {

  return (
    <React.Fragment >
    <CssBaseline/>
  
       <MainPage/>
       <AdminPage/>
       <Switch>
        {/* <Redirect to='/product'/> */}
        <Route path="/login" exact component={Login}/>
       </Switch>
     
    </React.Fragment>
  );
}

export default App

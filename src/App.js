
import Login from "./pages/LoginPage";
import { Route, Switch} from "react-router-dom";
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
        <Route path="/" exact component={Carousel}/>
        <Route path="/login" exact component={Login}/>
       </Switch>
     
    </React.Fragment>
  );
}

export default App

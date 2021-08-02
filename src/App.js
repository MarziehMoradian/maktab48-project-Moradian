
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
import AdminPage from "./pages/admin/AdminPage";
import Carousel from './components/Carousel'
import NavBar from "./components/mainPageComponents/NavBar/Navbar";
function App() {

  return (
    <React.Fragment>
    <CssBaseline/>
    {/* <NavBar/> */}
       {/* <Carousel/> */}
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

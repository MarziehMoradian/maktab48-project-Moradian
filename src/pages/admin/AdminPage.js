import React from 'react'
import { Redirect, Route, Switch} from "react-router-dom";
import { ProtectedRoute } from '../../ProtectedRoute';
import Headers from '../../components/Headers';
import Login from '../LoginPage';
import ProductManagement from './Productsmanagement';
import PriceManagment from './PriceManagement';
import OrderManagment from './OrderManagment';
import NavBar from '../../components/mainPageComponents/NavBar/Navbar';
import AdminPanelPage from './AdminPanelPage';
import { isLoggedIn } from '../../utils/auth';
const AdminPage = () => {
    return (
        <div>
            
           {/* <Headers/> */}
            <Switch>
             
           <ProtectedRoute path="/adminPanel/productmanagement" exact component={ProductManagement}/>
             <ProtectedRoute path="/adminPanel/PriceManagment" exact component={PriceManagment}/>
             <ProtectedRoute path="/adminPanel/OrderManagment" exact component={OrderManagment}/> 
             <Redirect path="/adminPanel" to={isLoggedIn ? '/adminPanel/productmanagement' : '/login'}/>
            {/* <Route path="/login" exact component={LoginPage} /> */}
          </Switch>
        </div>
    )
}

export default AdminPage

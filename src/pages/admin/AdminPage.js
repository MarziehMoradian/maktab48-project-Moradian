import React from 'react'
import { Redirect,  Switch} from "react-router-dom";
import { ProtectedRoute } from '../../ProtectedRoute';
import ProductManagement from './Productsmanagement';
import PriceManagment from './PriceManagement';
import OrderManagment from './OrderManagment';
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

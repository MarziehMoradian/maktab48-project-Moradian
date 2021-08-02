import React from 'react'
import { Route, Switch} from "react-router-dom";
import { ProtectedRoute } from '../../ProtectedRoute';
import Headers from '../../components/Headers';
import Login from '../LoginPage';
import ProductManagement from './Productsmanagement';
import PriceManagment from './PriceManagement';
import OrderManagment from './OrderManagment';
const AdminPage = () => {
    return (
        <div>
           
            <Switch>
             <Route path="/login" exact component={Login}/>
             {/* <ProtectedRoute path="/adminPanel/productmanagement" exact component={ProductManagement}/>
             <ProtectedRoute path="/adminPanel/PriceManagment" exact component={PriceManagment}/>
             <ProtectedRoute path="/adminPanel/OrderManagment" exact component={OrderManagment}/> */}
            <ProtectedRoute exact path="/adminPanel/:page?" component={Headers} />
          </Switch>
        </div>
    )
}

export default AdminPage

import React from 'react'
import { Route, Switch} from "react-router-dom";
import { ProtectedRoute } from '../../ProtectedRoute';
import Headers from '../../components/Headers';
import Login from '../LoginPage';
const AdminPage = () => {
    return (
        <div>
            <Switch>
             <Route path="/login" exact component={Login}/>
            <ProtectedRoute exact path="/adminPanel/:page?" component={Headers} />
          </Switch>
        </div>
    )
}

export default AdminPage

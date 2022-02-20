import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const Routes = () => (

    <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route exact path='/signup'>
            <Signup />
        </Route>
        <Route exact path='/login'>
           <Login/>
        </Route>
    </Switch>
    
)
export default Routes
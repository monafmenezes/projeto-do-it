import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";

const Routes = () => (

    <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route>
            <Signup exact path='/signup'/>
        </Route>
    </Switch>
    
)
export default Routes
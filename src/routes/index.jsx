import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useState } from "react";
import { useEffect } from "react";

const Routes = () => {

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@Doit:token'))
        if(token) {
            return setAuthenticated(true)
        }
    }, [authenticated])

    return(
    
        <Switch>
            <Route exact path='/'>
                <Home
                    authenticated={authenticated}         
                />
            </Route>
            <Route exact path='/signup'>
                <Signup
                    authenticated={authenticated}   
                />
            </Route>
            <Route exact path='/login'>
               <Login
                    authenticated={authenticated}   
                    setAuthenticated={setAuthenticated}
               />
            </Route>

            <Route exact path='/dashboard' >
                <Dashboard authenticated={authenticated}  />
            </Route>
            
        </Switch>
        
    )
}

export default Routes
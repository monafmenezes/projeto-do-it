import { Redirect } from "react-router-dom"

const Dashboard = ({authenticated}) => {

    if(!authenticated) {

        return <Redirect to='/login' />
    }
    
    return(<div>Dashboard</div>)
}

export default Dashboard
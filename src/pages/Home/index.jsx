import { Redirect, useHistory} from "react-router-dom"
import Button from "../../components/Button"
import { Container, Content } from "./style"
const Home = ({authenticated}) => {

    const history = useHistory()

    if(authenticated) {
        return <Redirect to='/dashboard' />
    }

    const handleNavigation = (path) => {
        return history.push(path)
    }




    return (

        <Container>
            <Content>

                <h1>do<span>.</span>it</h1>
                <span>Organize-se de forma fácil e efetiva</span>
                <div>
                    <Button onClick={() => handleNavigation('/signup')} whiteSchema={true}>Cadastre-se</Button>
                    <Button onClick={() => handleNavigation('/login')} >Login</Button>
                </div>
            </Content>

        </Container>
        
    )
}

export default Home 
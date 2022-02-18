import { Background, Container, Content, AnimationContainer } from "./styles"
import Button from '../../components/Button'
import { Link } from "react-router-dom"
import Input from "../../components/Input"
import {FiUser, FiMail, FiLock} from 'react-icons/fi'



const Signup = () => {
    return(
        <Container>

            <Background/>
            <Content>
                <AnimationContainer>
                    <form>
                        <h1>Cadastro</h1>
                        <Input 
                            icon={FiUser}
                            label='Nome' 
                            placeholder='Seu nome'
                            
                        />

                        <Input icon={FiMail} label='Email' placeholder='Seu melhor email' />
                        <Input icon={FiLock} label='Senha' type='password' placeholder='Uma senha bem segura'/>
                        <Input icon={FiLock} label='Confirmação da senha' type='password' placeholder='Confirmação da senha'/>
                        <Button>Enviar</Button>
                        <p>Já tem uma conta? Faça seu <Link to='/login' >login</Link></p>
                    </form>
                </AnimationContainer>
            </Content>

        </Container>
    )
}

export default Signup
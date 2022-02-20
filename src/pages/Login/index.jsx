import { Background, Container, Content, AnimationContainer } from "./styles"
import Button from '../../components/Button'
import { Link, Redirect } from "react-router-dom"
import Input from "../../components/Input"
import { FiMail, FiLock} from 'react-icons/fi'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import api from "../../services/api"
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom"


const Login = ({authenticated ,setAuthenticated}) => {
    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().min(8, 'mínimo 8 digitos').required('Campo obrigatório'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const history = useHistory()
    const submit = (data) => {
       api.post("/user/login", data)
       .then((response) => {
            const {token} = response.data
            localStorage.setItem('@Doit:token', JSON.stringify(token))
            setAuthenticated(true)
            return history.push('/dashboard')

       })
       .catch((_) => {
        toast.error('Email ou senha inválidos')
       })
    } 

    if(authenticated) {
        return <Redirect to='/dashboard' />
    }

    return(
        <Container>
            
            <Content>
                <AnimationContainer>

                    <form onSubmit={handleSubmit(submit)}>

                        <h1>Login</h1>
                       
                        <Input 
                            icon={FiMail} 
                            label='Email' 
                            placeholder='Seu melhor email' 
                            register={register} 
                            name='email'
                            error={errors.email?.message}
                         />
                        <Input 
                            icon={FiLock} 
                            label='Senha'  
                            type='password' 
                            placeholder='Uma senha bem segura' 
                            register={register}
                            error={errors.password?.message}
                            name='password'
                        />

                       
                        <Button type="submit">Enviar</Button>
                        <p>Não tem uma conta? Faça seu <Link to='/signup'>cadastro</Link></p>

                    </form>

                </AnimationContainer>
            </Content>

            <Background/>

        </Container>
    )

}

export default Login
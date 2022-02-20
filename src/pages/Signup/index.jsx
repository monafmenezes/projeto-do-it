import { Background, Container, Content, AnimationContainer } from "./styles"
import Button from '../../components/Button'
import { Link, Redirect } from "react-router-dom"
import Input from "../../components/Input"
import {FiUser, FiMail, FiLock} from 'react-icons/fi'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import api from "../../services/api"
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom"



const Signup = ({authenticated}) => {

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().min(8, 'mínimo 8 digitos').required('Campo obrigatório'),
        password_confirm: yup.string().oneOf([yup.ref('password'), 'Senhas diferentes']).required('Campo obrigatório'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    
    const history = useHistory()

    const submit = ({name, email, password}) => {
       const user = {name, email, password }
       api.post("/user/register", user)
       .then((response) => {
        toast.success('Sucesso ao criar a conta')
            history.push('/login')

       })
       .catch((_) => {
        toast.error('Erro ao criar a conta, tente outro email')

       })

    } 

    if(authenticated) {
        return <Redirect to='/dashboard' />
    }


    return(
        <Container>
            
             <Background/>
            
            <Content>
                <AnimationContainer>

                    <form onSubmit={handleSubmit(submit)}>
                        <h1>Cadastro</h1>
                        <Input 
                            icon={FiUser}
                            label='Nome' 
                            placeholder='Seu nome'
                            register={register}
                            name='name'
                            error={errors.name?.message}
                            
                        />

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

                        <Input 
                            icon={FiLock} 
                            label='Confirmação da senha' 
                            type='password' placeholder='Confirmação da senha' 
                            register={register}
                            name='password_confirm'
                            error={errors.password_confirm?.message}
                        />
                        <Button type="submit">Enviar</Button>
                        <p>Já tem uma conta? Faça seu <Link to='/login' >login</Link></p>

                    </form>

                   

                </AnimationContainer>
            </Content>

        </Container>
    )
}

export default Signup
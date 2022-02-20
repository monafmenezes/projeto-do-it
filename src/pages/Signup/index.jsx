import { Background, Container, Content, AnimationContainer } from "./styles"
import Button from '../../components/Button'
import { Link } from "react-router-dom"
import Input from "../../components/Input"
import {FiUser, FiMail, FiLock} from 'react-icons/fi'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'



const Signup = () => {

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().email('Emailinválido').required('Campo obrigatório'),
        password: yup.string().min(8, 'mínimo 8 digitos').required('Campo obrigatório'),
        password_confirm: yup.string().oneOf([yup.ref('password'), 'Senhas diferentes']).required('Campo obrigatório'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    
    
    const submit = (data) => {
        console.log(data)
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
import { Redirect } from "react-router-dom"
import { Container, InputContainer, TaskComtainer } from "./styles"
import Input from '../../components/Input'
import { useForm } from "react-hook-form"
import Button from '../../components/Button'
import { FiEdit2 } from "react-icons/fi"
import Card from "../../components/Card"

const Dashboard = ({authenticated}) => {
    const {register, handleSumit} = useForm()


    if(!authenticated) {

        return <Redirect to='/login' />
    }

    
    return(
        
        <Container>
            <InputContainer>
                <time>20 de fevereiro de 2022</time>
                <section>
                    <Input 
                        icon={FiEdit2} 
                        placeholder='Nova tarefa' 
                        register={register} 
                        name='task' 
                    />

                    <Button type='submit'>Adicionar</Button>
                   
                </section>
            </InputContainer>

            <TaskComtainer>
                {[1, 2, 3].map(_ => <Card title='olá' date='21 de fevereiro de 2022' onClick={()=> {}} />)}
            </TaskComtainer>

        </Container>
    
    )
}

export default Dashboard
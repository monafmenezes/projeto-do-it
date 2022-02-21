import { Redirect} from "react-router-dom"

import { Container, InputContainer, TaskComtainer } from "./styles"
import Input from '../../components/Input'
import { useForm } from "react-hook-form"
import Button from '../../components/Button'
import { FiEdit2 } from "react-icons/fi"
import Card from "../../components/Card"
import { useState } from "react"
import api from '../../services/api'
import { useEffect } from "react"
import { toast } from "react-toastify"

const Dashboard = ({authenticated}) => {
    const [tasks, setTasks] = useState([])
    const [token] = useState(JSON.parse(localStorage.getItem('@Doit:token')) || '')
    const {register, handleSubmit} = useForm()

    function loadTasks() {
        api.get('/task', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                completed: false
            }
        })
        .then((response )=> {
            const apiTasks = response.data.data.map(task =>({
                ...task, 
                createdAt: new Date(task.createdAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month:'long',
                    year: 'numeric'
                })

            }))

            setTasks(apiTasks)
        })
        .catch((err) => console.log(err))

    }

    useEffect(() => {
        loadTasks()
    }, [])

    const onSubmit = ({task}) => {
        if(!task) {
            return toast.error('Complete o campo para enviar uma tarefa')
        }

        api.post('/task', {
            description: task
        },  {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
       ).then((response) => loadTasks())
    }

    const handleCompleted = (id) => {
        const newTasks = tasks.filter(task => task._id !== id)
        api.put(`/task/${id}`, {completed: true}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => setTasks(newTasks))
    }



    if(!authenticated) {

        return <Redirect to='/login' />
    }

    
    return(
        
        <Container>
            <InputContainer onSubmit={handleSubmit(onSubmit)}>
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
                {tasks.map((task) => <Card key={task._id} title={task.description} date={task.createdAt} onClick={()=> handleCompleted(task._id)} />)}
            </TaskComtainer>

        </Container>
    
    )
}

export default Dashboard
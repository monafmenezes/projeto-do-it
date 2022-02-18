import { Container } from "./style"

const Button = ({children, whiteSchema = false, ...rest}) => {

    return(

        <Container type="button" whiteSchema={whiteSchema} {...rest} >
            {children}
        </Container>
    )
}

export default Button
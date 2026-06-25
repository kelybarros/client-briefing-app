import {Container, } from './styles'


function Button ({children,
    variant = "primary",
    ...rest}){

    return(
        <Container
        variant={variant}
        {...rest}>
            {children}
        </Container>
    )
}

export default Button;
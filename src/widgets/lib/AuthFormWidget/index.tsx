import { Box, Button, Flex, FormControl, Input, Text, VStack } from "@chakra-ui/react"
import { useState, FC } from "react"
import { Link, useNavigate } from "react-router-dom"
import { API } from "@shared/lib/api";


export type ChangeEvent = React.ChangeEvent<HTMLInputElement>


// widget props model
interface IAuthFormWidgetProps {
    login?: boolean
}


// register
export interface IFormWidgetRegisterData {
    email: string
    password: string
    full_name: string
}

// login 
export interface IFormWidgetLoginData {
    email: string
    password: string
}


// component
export const AuthFormWidget: FC<IAuthFormWidgetProps> = (props) => {
    const navigate = useNavigate()
    const login = props.login

    // register form data
    const [ registerFormData, setRegisterFormData ] = useState<IFormWidgetRegisterData>({
        email: "",
        password: "",
        full_name: "",
    })

    // login form data
    const [ loginFormData, setLoginFormData ] = useState<IFormWidgetLoginData>({
        email: "",
        password: "",
    })


    // changing data
    const handleChange = (event: ChangeEvent) => {
        const { name, value } = event.target

        if (login) {
            setLoginFormData( prevData => ({ ...prevData, [name]: value }) )
            console.log(loginFormData)
        } else {
            setRegisterFormData( prevData => ({ ...prevData, [name]: value }) )
            console.log(registerFormData)
        }
    }


    // submitting data
    const handleSubmit = () => {
        if (login) {
            API.Auth.login(loginFormData)
                .then(() => {
                    navigate("/home")
                })
        } else {
            API.Auth.register(registerFormData)
                .then( () => API.Auth.login(registerFormData) )
        }
    }


    return (
        <Flex
            w="100%"
            h="100vh"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bg="black"
        >
            <Box
                minW="20rem"
                bg="#28282883"
                p="1rem"
                borderRadius="1rem"
            >
                <FormControl>
                    <VStack gap="1rem" align="center">
                        <Text
                            color="white"
                            fontSize="2rem"
                            fontWeight="bold"
                        >
                            { login ? "Вход" : "Регистрация" }
                        </Text>

                        { !login && <Input
                            color="white"
                            name="email"
                            type="email"
                            placeholder="Адрес эл. почты"
                            value={ registerFormData.email }
                            onChange={ handleChange }
                            required
                        /> }

                       <Input
                            color="white"
                            name={ login ? "email" : "full_name" }
                            type="username"
                            placeholder={ login ? "Адрес эл. почты" : "Имя" }
                            value={ login ? loginFormData.email : registerFormData.full_name }
                            onChange={ handleChange }
                            required
                        />

                        <Input
                            color="white"
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            value={ login ? loginFormData.password : registerFormData.password }
                            onChange={ handleChange }
                            required
                        />

                        <Link to={ login ? "../register" : "../login" }>
                            <Text color="white">
                                { login ? "Нет аккаунта? Зарегистрироваться" : "Есть аккаунт? Войти" }
                            </Text>
                        </Link>

                        <Button
                            colorScheme="yellow"
                            w="100%"
                            onClick={ () => handleSubmit() }
                        >
                            { login ? "Войти" : "Зарегистрироваться" }
                        </Button>
                    </VStack>
                </FormControl>
            </Box>
        </Flex>
    )
}

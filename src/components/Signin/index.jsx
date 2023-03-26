import React from 'react'
import { Container, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Form, Text, LinkText } from './SigninElements'

const Signin = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>GreenBank</Icon>
                <FormContent>
                    <Form>
                        <FormH1>Entre na sua conta</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Senha</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='button'>Continar</FormButton>
                        <Text>Esqueceu sua senha? <LinkText to='/forgotpassword'>Recuperar Senha</LinkText></Text>
                        <Text>Não possui conta? <LinkText to='/signup'>Abrir conta</LinkText></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Signin

import React from 'react'
import { Container, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Form, Text, LinkText } from './SignupElements'

const Signup = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>GreenBank</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Abra sua conta</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Senha</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continar</FormButton>
                        <Text>Já possui conta? <LinkText to='/signin'>Entrar</LinkText></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Signup

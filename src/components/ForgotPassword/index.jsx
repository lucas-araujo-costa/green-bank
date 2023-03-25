import React from 'react'
import { Container, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Form } from './ForgotPasswordElements'

const ForgotPassword = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>GreenBank</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Recuperar senha</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormButton type='submit'>Continar</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default ForgotPassword
import React from 'react';

import { toast } from 'react-toastify'

import { Container } from '../../styles/global';

export default function SignIn(){
  
  return (
    <Container>
      <button onClick={() => toast.success('Seja bem vindo ao Login')}> 
        Exibir Mensagem
      </button>
      <h1>Página de Login</h1>
    </Container>
  )
}
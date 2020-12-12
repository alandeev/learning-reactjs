import React, { useState } from 'react';

import { toast } from 'react-toastify'

import { Container } from '../../styles/global';

import api from '../../services/axios';

export default function SignIn(){
  const [ text, changeText ] = useState("");

  function handleSubmit(event){
    event.preventDefault();

    toast.error(text);
  }

  return (
    <Container>
      <h1>Página de Login</h1>
      <p>{text}</p> 
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={event => changeText(event.target.value)} />
        <button type="submit">Entrar</button>
      </form> 
    </Container>
  )
}
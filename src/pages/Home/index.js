import React, { useState } from 'react';

import { Container } from '../../styles/global';
import LabelEditable from '../../components/LabelEditable';

import { toast } from 'react-toastify';

import './style.css';

export default function Home(){
  const [ email, setEmail ] = useState("alandev2@gmail.com");
  const [ password, setPassword ] = useState("123456");

  function handleSubmit(event){
    event.preventDefault();
    toast.success(`email: ${email}, password: ${password}`);
  }

  return (
    <Container>
      <h1>Página principal</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" for="email">E-mail</label>
          <LabelEditable value={email} name="email" onChange={setEmail} />
        </div>
        <div className="field">
          <label className="label" for="password">Password</label>
          <LabelEditable value={password} name="password" onChange={setPassword} />
        </div>
        <button type="submit">Exibir Valores</button>
      </form>
    </Container>
  )
}
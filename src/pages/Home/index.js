import React, { useState } from 'react';

import { Container } from '../../styles/global';
import './style.css';

import { toast } from 'react-toastify';

import LabelEditable from 'react-label-editable';

export default function Home(){
  const [ email, setEmail ] = useState("pedro@gmail.com");
  const [ password, setPassword ] = useState("123456");

  function handleSubmit(event){
    event.preventDefault();
    toast.success(`email: ${email}`);
  }

  return (
    <Container>
      {/* <h1>Página principal</h1> */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" for="email">E-mail</label>
          <div className="input">
            <LabelEditable value={email} name="email" onChange={setEmail} buttonEdit={true} />
          </div>
        </div>
        <div className="field">
          <label className="label" for="password">Password</label>
          <LabelEditable value={password} name="password" onChange={setPassword} />
        </div>
        <br></br>
        <button type="submit">Change Account</button>
      </form>
    </Container>
  )
}
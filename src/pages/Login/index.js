import React from 'react';

import { Container } from '../../styles/global';
import { Title, Paragrafo } from './styled';

export default function Login(){
  return (
  <Container>
    <Title isRed={false}>
      Pagina de Login
      <small>Olá testando 12334</small>
    </Title>
    <Paragrafo>OKKK</Paragrafo>
    <button type="button">Enviar</button>
  </Container>
  )
}
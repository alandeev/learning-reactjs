import React from 'react';

import { Container } from '../../styles/global';

import history from '../../services/history';

export default function Page404(){
  history.push('/auth');
  return (
    <Container>
      <h1>Página não Encontrada...</h1>
    </Container>
  )
}
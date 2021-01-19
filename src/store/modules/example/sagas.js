import { call, put, all, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

//takeLatest: pegar apenas a ultima vez que o usuário clicou no botão.
import * as types from '../types';
import * as actions from './actions';

const requisicao = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })

function* exampleRequest(){
  try {
    yield call(requisicao);
    toast.success("Deu sucesso!")
    yield put(actions.clickButtonSuccess());
  } catch {
    toast.error("Deu error!")
    yield put(actions.clickButtonFailure()); 
  }
}

export default all([
  takeLatest(types.BUTTON_CLICKED_REQUEST, exampleRequest)
]);
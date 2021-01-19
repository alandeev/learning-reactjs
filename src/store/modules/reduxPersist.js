import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

//eslint-disable-next-line
export default (reducers) => {
  const persistedReducers = persistReducer(
    { 
      key: 'REACT-BASE',
      storage,
      whitelist: ['example'],
    },
    reducers
  );

  return persistedReducers;
}
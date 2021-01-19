import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import GlobalStyle from './styles/global';

import store, { persistor } from './store';
import history from './services/history';
import Routes from './routers';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <Router history={history} >
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';

import store from './store';
import history from './services/history';
import Routes from './routers';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store} >
      <Router history={history} >
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;

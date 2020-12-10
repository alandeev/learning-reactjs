import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import history from './services/history';
import Routes from './routers';
import Header from './components/Header';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;

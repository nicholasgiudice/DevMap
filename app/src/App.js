import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Main from './pages/main';
import './config/ReactotronConfig';
import 'font-awesome/css/font-awesome.css';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;

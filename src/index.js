import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store from './Redux/store';
import App from './Components/App';


ReactDOM.render(
<React.StrictMode>
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);

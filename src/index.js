import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import FoodProvider from './context/FoodProvider';
import DrinkProvider from './context/DrinkProvider';
import { Global } from './pages/style';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <FoodProvider>
        <DrinkProvider>
          <Global />
          <App />
        </DrinkProvider>
      </FoodProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

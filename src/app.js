import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import AppRouter from './client/routers/AppRouter'
import configureStore from './client/store/configurStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'normalize.css/normalize.css'
import './client/styles/style.scss' 

const store = configureStore();

const jsx = (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'))
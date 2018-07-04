import React from 'react'
import Header from './Header'
import { Provider } from 'react-redux';
import CamperInformation from './CamperInformation'
import configureStore from '../store/configurStore';

const store = configureStore();
console.log(store.getState());
const Registration = () => (
    <div>
        <Header />
        <CamperInformation />
    </div>
);


export default () => (
    <Provider store={store}>
        <Registration />
    </Provider>
);
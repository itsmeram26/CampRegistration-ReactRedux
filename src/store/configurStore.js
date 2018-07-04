import { createStore, combineReducers} from 'redux';
import camperReducer from '../reducers/camperreducer';

export default () => {
    const store = createStore(camperReducer);
    return store;
};
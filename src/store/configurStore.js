import { createStore, combineReducers} from 'redux';
import camperReducer from '../reducers/camperreducer';

export default () => {
    const store = createStore(combineReducers({
        camper: camperReducer
      }));
    return store;
};
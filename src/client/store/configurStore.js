import { applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import camperReducer from '../reducers/camperreducer';

export default () => {
    const store = createStore(combineReducers({
        camper: camperReducer
      }), applyMiddleware(thunk));
    return store;
};
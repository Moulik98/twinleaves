import { 
    applyMiddleware, 
    combineReducers, 
    legacy_createStore, 
    compose 
} from 'redux';
import thunk from 'redux-thunk';
import { reducer as AppReducer } from './AppReducer/reducer';


const rootReducer = combineReducers({ App: AppReducer });

const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)));

export { store };
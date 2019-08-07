import { createStore,combineReducers,compose } from 'redux'
import studentsReducer from './reducers/students'

const rootReducer=combineReducers({
    classes:studentsReducer
});

let composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 


const configureStore=()=>{
    return createStore(rootReducer,composeEnhancers());
}

export default configureStore;
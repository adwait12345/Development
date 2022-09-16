import { createStore ,applyMiddleware} from "redux";

import {persistStore,persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import reducer from "./reducers/index";

const persistConfig={
    key:"main-root",
    storage
}
const persistedReducer = persistReducer(persistConfig,reducer);


const store = createStore(persistedReducer,{},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Persistor=persistStore(store)
export{Persistor}
export default  store;
import { applyMiddleware, createStore } from "redux"
import { Rootreducer } from "./reducer";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

const persistconfig = {
    key:'root',
    storage,
    whitelist:['counter']
}

const persistReducer = persistReducer(persistconfig,Rootreducer)

export const configstore = () =>{
    let store = createStore(persistReducer,applyMiddleware(thunk))
    let persistor = persistStore(store)
    return {store,persistor};
}
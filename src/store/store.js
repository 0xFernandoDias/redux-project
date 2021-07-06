import { createStore, combineReducers } from 'redux'
import productsReducer from './Products/Products.reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    products: productsReducer
})

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)
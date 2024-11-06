import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from "./Slice"
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
  cart: cartReducer,
},)
 
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export default store;
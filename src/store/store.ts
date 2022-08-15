import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import imgReducer from './reducers/ImgSlice';
import quantityReducer from './reducers/QuantitySlice';
import imgeBasketRedusser from './reducers/ImgBasket';

const rootReducer=combineReducers({
    userReducer,
    imgReducer,
    quantityReducer,
    imgeBasketRedusser
})
export  const setupStore=()=>{
    return configureStore({
        reducer:rootReducer
    })
}
export type RootState=ReturnType<typeof rootReducer>
export type AppStore=ReturnType<typeof setupStore>
export type AppDispatch=AppStore['dispatch']
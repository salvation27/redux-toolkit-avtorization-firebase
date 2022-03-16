import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import {goodsApi} from './slices/goodsApi'

export const store = configureStore({
    reducer: {
        user: userReducer,
        [goodsApi.reducerPath]:goodsApi.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(goodsApi.middleware)
});
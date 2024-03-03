import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import breadcrumbsSlice from "./features/breadcrumbsSlice";
const rootReducer = combineReducers({
    auth: authReducer,
    breadcrumbs: breadcrumbsSlice
})

const middleware = (getDefaultMiddleware: any) =>
getDefaultMiddleware().concat([

])
export const store = configureStore({
    reducer: rootReducer,
    middleware
})
export type RootState  = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
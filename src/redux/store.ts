import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import breadcrumbsSlice from "./features/breadcrumbsSlice";
import { departmentApi } from "./features/service/departmentApiService";
const rootReducer = combineReducers({
    auth: authReducer,
    breadcrumbs: breadcrumbsSlice,
    [departmentApi.reducerPath]: departmentApi.reducer
})

const middleware = (getDefaultMiddleware: any) =>
getDefaultMiddleware().concat([
    departmentApi.middleware
])
export const store = configureStore({
    reducer: rootReducer,
    middleware
})
export type RootState  = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
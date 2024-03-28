import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import breadcrumbsSlice from "./features/breadcrumbsSlice";
import { departmentApi } from "./features/service/departmentApiService";
import { organizationApi } from "./features/service/organizationApiService";
import { religionApi } from "./features/service/religionApiService";
import { bloodGroupApi } from "./features/service/bloodGroups";
import { divisionApi } from "./features/service/division";
const rootReducer = combineReducers({
  auth: authReducer,
  breadcrumbs: breadcrumbsSlice,
  [departmentApi.reducerPath]: departmentApi.reducer,
  [organizationApi.reducerPath]: organizationApi.reducer,
  [religionApi.reducerPath]: religionApi.reducer,
  [bloodGroupApi.reducerPath]: bloodGroupApi.reducer,
  [divisionApi.reducerPath]: divisionApi.reducer
});

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat([
    departmentApi.middleware,
    organizationApi.middleware,
    religionApi.middleware,
    bloodGroupApi.middleware,
    divisionApi.middleware
  ]);
export const store = configureStore({
    reducer: rootReducer,
    middleware
})
export type RootState  = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
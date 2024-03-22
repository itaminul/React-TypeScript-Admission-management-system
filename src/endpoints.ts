import { checkUniqueValues, memoize } from "./utils/common";
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:9007";
export const WEB_BASE_URL = import.meta.env.VITE_WEB_BASE_URL ?? "http://localhost:5173";
  const memoizedCheckUniqueValues = memoize(checkUniqueValues);
  const endpoints = {
    login: '/user/login',
    departmentInfo: '/department',
    organizationInfo: '/organization'

  }
  memoizedCheckUniqueValues(endpoints);
  export default endpoints;
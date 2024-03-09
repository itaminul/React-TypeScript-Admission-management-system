import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DepartmentDataType } from "../../../components/setup/department/DepartmentDataType";
const url = 'http://localhost:9007/api'
export const departmentApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    endpoints: (builder) => ({
        fetchData: builder.query<any, void>({
            query: () => 'departmentSetup',
        }),
        createDepartmentSetup: builder.mutation<DepartmentDataType, Partial<DepartmentDataType>>({
            query: (createDepartment: any) => ({
                url: 'department',
                method: 'POST',
                body: createDepartment,
    
            }),
        }),
    }),

})
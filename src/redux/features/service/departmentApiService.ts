import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DepartmentDataType } from "../../../components/setup/department/DepartmentDataType";
const url = 'http://localhost:9007/api/';
export const departmentApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9007/api/",
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken != null) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDepartmentData: builder.query<DepartmentDataType[], void>({
      query: () => "department",
      transformResponse: (response: any) => {
        const formateddata = response.results?.map((item: any) => ({
          id: item.id,
          departmentName: item.departmentName,
          departmentDes: item.departmentDes,
        }));
        return formateddata;
      },
    }),
    createDepartmentSetup: builder.mutation<
      DepartmentDataType,
      Partial<DepartmentDataType>
    >({
      query: (createDepartment: any) => ({
        url: "department",
        method: "POST",
        body: createDepartment,
      }),
    }),
  }),
});

export const { useCreateDepartmentSetupMutation, useGetDepartmentDataQuery } = departmentApi;
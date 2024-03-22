import { API_BASE_URL } from "../../../endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DepartmentDataType } from "../../../components/setup/department/DepartmentDataType";
export const departmentApi = createApi({
  reducerPath: "departmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
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
          serialNo: item.serialNo,
        }));
        return formateddata;
      },
    }),
    getDepartmentById: builder.query<DepartmentDataType[], number>({
      query: (id) => `department/byId/${id}`,
      transformResponse: (response: any) => {
        return response.results[0];
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
    updateDepartment: builder.mutation<
      void,
      { id: number; formData: DepartmentDataType }
    >({
      query: (data) => ({
        url: `/department/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateDepartmentSetupMutation,
  useGetDepartmentDataQuery,
  useGetDepartmentByIdQuery,
  useUpdateDepartmentMutation,
} = departmentApi;

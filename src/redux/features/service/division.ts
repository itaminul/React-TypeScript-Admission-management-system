import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../endpoints";
import { DivisionDataType } from "../../../components/setup/division/DivisionDataType";

export const divisionApi = createApi({
  reducerPath: "divisionApi",
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
    getDivisionData: builder.query<DivisionDataType[], void>({
      query: () => "divisition",
      transformResponse: (response: any) => {
        const formateddata = response.results?.map((item: any) => ({
          id: item.id,
          divisionName: item.divisionName,
          divisionDes: item.divisionDes,
        }));
        return formateddata;
      },
    }),
  }),
});

export const { useGetDivisionDataQuery } = divisionApi;

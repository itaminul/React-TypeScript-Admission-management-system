import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../endpoints";
import { DistrictDataType } from "../../../components/setup/district/DistrictDataType";

export const districtApi = createApi({
  reducerPath: "districtApi",
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
    getDistrictData: builder.query<DistrictDataType[], void>({
      query: () => "district",
      transformResponse: (response: any) => {
        const formateddata = response.results?.map((item: any) => ({
          id: item.id,
          districtName: item.districtName,
          districtDes: item.districtDes,
          divisionId: item.divisionId,
        }));
        return formateddata;
      },
    }),
  }),
});

export const { useGetDistrictDataQuery } = districtApi;

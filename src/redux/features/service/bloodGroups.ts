import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../endpoints";
import { BloodGroupDataType } from "../../../components/setup/bloodGroup.ts/bloodGroupDataType";

export const bloodGroupApi = createApi({
  reducerPath: "bloodGroupApi",
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
    getBloodGroupData: builder.query<BloodGroupDataType[], void>({
      query: () => "blood-groups",
      transformResponse: (response: any) => {
        const formateddata = response.results?.map((item: any) => ({
          id: item.id,
          bloodGroupName: item.bloodGroupName,
          bloodGroupDes: item.bloodGroupDes,
        }));
        return formateddata;
      },
    }),
  }),
});

export const { useGetBloodGroupDataQuery } = bloodGroupApi;

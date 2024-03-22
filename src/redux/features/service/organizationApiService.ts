import { OrganizationDataType } from "../../../components/setup/organization/OrganizationDataType";
import { API_BASE_URL } from "../../../endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const organizationApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem("accessToken");
            if (accessToken != null) {
              headers.set("Authorization", `Bearer ${accessToken}`);
            }
            return headers;
    }
  }),
  endpoints: (builder) => ({
    getOrganizationData: builder.query<OrganizationDataType[], void>({
      query: () => "organization",
      transformResponse: (response: any) => {
        const formateddata = response.results?.map((item: any) => ({
          id: item.id,
          organizationName: item.organizationName,
          organizationDes: item.organizationDes,
        }));
        return formateddata;
      }
    }),
  }),
});

export const { useGetOrganizationDataQuery } = organizationApi;
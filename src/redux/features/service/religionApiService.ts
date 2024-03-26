import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../endpoints";
import { ReligionDataType } from "../../../components/setup/religion/ReligionDataType";

export const religionApi = createApi({
  reducerPath: "religionApi",
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
    getReligionData: builder.query<ReligionDataType[], void>({
      query: () => "religions",
      transformResponse: (response: any) => {
        const formateddata = response.results?.map((item: any) => ({
          id: item.id,
          orgName: item.orgName,
          orgDescription: item.orgDescription,
        }));
        return formateddata;
      },
    }),
  }),
});

export const { useGetReligionDataQuery } = religionApi
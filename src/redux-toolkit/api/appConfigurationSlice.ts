import { AppConfigurationType } from "../types";
import { apiSlice } from "./apiSlice";



const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAppConfiguration: builder.query({
            query: (appId: string = "1") => `/configuration/${appId}/`,
            transformResponse: (response: AppConfigurationType) => response
        })
    })
})


export const { useGetAppConfigurationQuery } = extendedApiSlice
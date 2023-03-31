import { apiSlice } from "./apiSlice";

interface AppConfigurationType {
    hasUserSection: boolean,
    id: string,
    mainColor: string,
    logo: string
}

const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAppConfiguration: builder.query({
            query: (appId: string = "1") => `/configuration/${appId}/`,
            transformResponse: (response: AppConfigurationType) => response
        })
    })
})


export const { useGetAppConfigurationQuery } = extendedApiSlice
import { TrlListType } from "../types";
import { apiSlice } from "./apiSlice";





const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTrlList: builder.query({
            query: () => ({
                url: `trl/`,
                method: "GET"
            }),
            transformResponse: (response: TrlListType[]) => response
        }),
    })
})

export const { useGetTrlListQuery } = extendedApiSlice

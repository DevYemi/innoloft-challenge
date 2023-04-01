import { apiSlice } from "./apiSlice";


interface TrlListType {
    description: null | string,
    id: string,
    name: string
}


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

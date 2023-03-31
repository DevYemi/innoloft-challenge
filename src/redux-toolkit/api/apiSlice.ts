import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api-test.innoloft.com' }),
    tagTypes: ["User"],
    refetchOnReconnect: true,
    endpoints: () => ({}),

})

// Create an array of redux-tookit provider Tags to Invalidate with Mutation changes
export function providesList(resultsWithIds: any, tagType: any, tagId: any) {

    return resultsWithIds
        ? [
            { type: tagType, id: tagId },
            ...resultsWithIds?.map(({ id }: any) => ({ type: tagType, id })),
        ]
        : [{ type: tagType, id: tagId }]
}


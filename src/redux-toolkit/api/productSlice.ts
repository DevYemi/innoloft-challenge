import { ProductDataType } from "../types";
import { apiSlice } from "./apiSlice";



const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (productId: number) => ({
                url: `product/${productId}/`,
                method: "GET"
            }),
            providesTags: (result, error, productId) => [{ type: 'Product', id: productId }],
            transformResponse: (response: ProductDataType) => response

        }),
        updateProduct: builder.mutation({
            query: ({ productId, ...body }) => ({
                url: `product/${productId}/`,
                method: "PUT",
                body: body
            }),
            invalidatesTags: (result, error, { productId }) => [{ type: 'Product', id: productId }],

        })
    })
})

export const { useGetProductQuery, useUpdateProductMutation } = extendedApiSlice
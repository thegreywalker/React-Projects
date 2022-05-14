import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Products } from "../models/products.model";

export const djangoApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://django-pwu-api.herokuapp.com/'}),
    endpoints: (builder) => ({ 
        products: builder.query<Products[], void>({
            query: () => "/products"
        })
    })
})

export const { useProductsQuery } = djangoApi;
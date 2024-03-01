import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../../utils/constants';
import ProductType from '../../types/product.type';

type ProductsResponseType = {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number;
};

export const productsQuery = createApi({
  reducerPath: 'productsQuery',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: builder => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => '/products',
      transformResponse: (response: ProductsResponseType) => response.products,
    }),
    getProductById: builder.query<ProductType, string | number>({
      query: id => `/products/${id}`,
      transformResponse: (response: ProductType) => response,
    }),
  }),
});

export const {useGetProductByIdQuery, useGetProductsQuery} = productsQuery;

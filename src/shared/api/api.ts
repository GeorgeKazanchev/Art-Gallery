import axiosInstance from './axios-instance';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import { Author, Location } from '../types/painting';
import { PaintingDto } from '../types/painting-dto';
import { PICTURES_PER_PAGE, SERVER_BASE_URL } from '../config/consts';

type BaseQueryFunction = BaseQueryFn<{
  url: string,
  method?: AxiosRequestConfig['method'],
  data?: AxiosRequestConfig['data'],
  params?: AxiosRequestConfig['params'],
  headers?: AxiosRequestConfig['headers'],
},
  unknown,
  unknown>;

const axiosBaseQuery = ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): BaseQueryFunction =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: axiosInstance.defaults.baseURL ?? SERVER_BASE_URL,
  }),
  endpoints(builder) {
    return {
      getPaintings: builder.query<PaintingDto[], void>(
        { query: () => ({ url: `/paintings?_page=1&_limit=${PICTURES_PER_PAGE}`, method: 'get' }) }
      ),
      getAuthors: builder.query<Author[], void>(
        { query: () => ({ url: '/authors', method: 'get' }) }
      ),
      getLocations: builder.query<Location[], void>(
        { query: () => ({ url: '/locations', method: 'get' }) }
      ),
    }
  },
});

export const { useGetPaintingsQuery, useGetAuthorsQuery, useGetLocationsQuery } = api;

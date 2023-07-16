import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({

    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        })
    })

});

// este createApi nos crea a su vez customs Hooks, los cuales vas a tener que exportar
export const { useGetTodosQuery } = todosApi;
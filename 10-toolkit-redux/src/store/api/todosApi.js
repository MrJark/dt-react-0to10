import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({

    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodoById: builder.query({
            query: (todoId) => `/todos/${todoId}`
        }),
    })

});

// este createApi nos crea a su vez customs Hooks, los cuales vas a tener que exportar.
// el nombre con el que se crea lo exportado es el mismo con el que creas los endpoints
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
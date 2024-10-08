import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseUrl = "http://localhost:5000"

export const notesApi = createApi({
    reducerPath: 'notesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        fetchNotes: builder.query({ query: () => "/notes" }),
        createNote: builder.mutation({
            query: (body) => ({
                url: "/notes",
                method: "POST",
                body,
            }),
        }),
    })
})

export const { useFetchNotesQuery, useCreateNoteMutation } = notesApi

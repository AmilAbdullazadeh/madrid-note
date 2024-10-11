import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseUrl = "http://localhost:5000"

export const notesApi = createApi({
    reducerPath: 'notesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        fetchNotes: builder.query({ query: () => "/notes" }),
        getNoteById: builder.query({
            query: (id) => `/notes/${id}`,
        }),
        updateNote: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/notes/${id}`,
                method: "PATCH",
                body,
            }),
        }),
        createNote: builder.mutation({
            query: (body) => ({
                url: "/notes",
                method: "POST",
                body,
            }),
        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `/notes/${id}`,
                method: "DELETE",
            }),
        }),
    })
})

export const { useFetchNotesQuery, useGetNoteByIdQuery, useUpdateNoteMutation, useCreateNoteMutation, useDeleteNoteMutation } = notesApi

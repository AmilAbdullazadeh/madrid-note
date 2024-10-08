import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './notes/notes-slice';
import { notesApi } from '../services/notesApi';

export const store = configureStore({
    reducer: {
        notes: noteReducer,
        [notesApi.reducerPath]: notesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(notesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
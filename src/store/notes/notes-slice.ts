import { createSlice } from "@reduxjs/toolkit"

interface INote {
    notes: [],
    status: "idle" | "loading" | "succeeded" | "failed",    
    error: string | null,
}

const initialState: INote = {
        notes:[],
        status: "idle",
        error: null,
}

export const notesSlice = createSlice({
    name: "notesSlice",
    initialState,
    reducers: {},
    // extraReducers: {},
})

export default notesSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {

    }
})


// el taskSlice siendo un objeto, tiene propiedades y puedo exportarlas
export default taskSlice.reducer
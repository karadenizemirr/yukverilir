import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    detail: {}
}


export const fetchDetail = createAsyncThunk('detail/getDetail', async (data:any) => {

    // Get Detail
    const res:any = await fetch(process.env.NEXT_PUBLIC_API + '/search/detail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    const result = await res.json()
    return result?.data
})

export const {reducer, actions} = createSlice({
    name: 'detail',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchDetail.fulfilled, (state,action) => {
            state.detail = action.payload
        })
    }
})
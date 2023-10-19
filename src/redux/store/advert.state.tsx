import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    advert: {}
}

export const {actions, reducer} = createSlice({
    name: 'advert',
    initialState,
    reducers: {
         setAdvert: (state,action) => {
            state.advert = action.payload;
         }
    },
})


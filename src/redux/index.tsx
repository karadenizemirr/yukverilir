import { configureStore } from "@reduxjs/toolkit";
import {reducer as advertReducer} from './store/advert.state';


export const store = configureStore({
    reducer: {
        advertReducer: advertReducer
    }
})
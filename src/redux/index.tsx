import { configureStore } from "@reduxjs/toolkit";
import {reducer as advertReducer} from './store/advert.state';
import {reducer as detailReducer} from './store/detail.state';


export const store = configureStore({
    reducer: {
        advertReducer: advertReducer,
        detailReducer: detailReducer
        
    }
})
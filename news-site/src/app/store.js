import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../features/news-slice"

export const store = configureStore({
    reducer: {
        news: Reducer,
    },
});

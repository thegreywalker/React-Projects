import { configureStore } from "@reduxjs/toolkit";
import { djangoApi } from "../Services/django-api";

export const store = configureStore({
    reducer: {
        [djangoApi.reducerPath]: djangoApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(djangoApi.middleware)
})
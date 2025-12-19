import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import carReducer from "./carSlice"
import brandReducer from "./brandSlice";
import favoritesReducer from "./favoriteSlice";
import productReducer from "./destaintaionSlice";
import flightSlice from "./flight/flightSlice";
import compareSlice from "./compareSlice";
import internalSlice from "./internalSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        cars: carReducer,
        brands: brandReducer,
        favorites: favoritesReducer,
        product: productReducer,
        flight: flightSlice,
        compare: compareSlice,
        internal: internalSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
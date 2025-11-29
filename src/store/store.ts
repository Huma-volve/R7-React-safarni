import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./destaintaionSlice";
import flightSlice from "./flight/flightSlice";
import compareSlice from "./compareSlice";
import internalSlice from "./internalSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        flight: flightSlice,
        compare: compareSlice,
        internal: internalSlice,
    },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

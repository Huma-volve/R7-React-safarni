import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    email: string | null;
    username: string | null;
}

const initialState: AuthState = {
    token: localStorage.getItem("token"),
    email: localStorage.getItem("email"),
    username: localStorage.getItem("username"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (
            state,
            action: PayloadAction<{ token: string; email: string; username: string }>
        ) => {
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.username = action.payload.username;

            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("email", action.payload.email);
            localStorage.setItem("username", action.payload.username);
        },

        logout: (state) => {
            state.token = null;
            state.email = null;
            state.username = null;

            localStorage.removeItem("token");
            localStorage.removeItem("email");
            localStorage.removeItem("username");
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

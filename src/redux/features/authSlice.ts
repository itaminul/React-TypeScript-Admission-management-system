import { createSlice } from "@reduxjs/toolkit";
interface AuthState {
    isAuthenticate: boolean;
}
const initialState: AuthState = {
    isAuthenticate: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticate = true;
        },
        logout(state) {
            state.isAuthenticate = false;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
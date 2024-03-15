import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface AuthState {
    isAuthenticate: boolean;
    accessToken: string | null;
}
const initialState: AuthState = {
    isAuthenticate: false,
    accessToken: localStorage.getItem('accessToken'),
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticate = true;
    },
    logout(state) {
      state.isAuthenticate = false;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    clearAccessToken(state) {
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { login, logout, setAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;
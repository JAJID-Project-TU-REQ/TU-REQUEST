import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
    user: null,
};

const loginState = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.value = false;
            state.user = null;
        },
    },
});

export const { login, logout } = loginState.actions;

export default loginState.reducer;
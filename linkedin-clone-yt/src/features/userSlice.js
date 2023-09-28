import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: 0,
//   status: 'idle',
// };

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },

  reducers: {
    login: (state, action) => {
      // state.value = action.payload;
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user; 
//state.user.value; // selectors - to pull from data layer 

export default userSlice.reducer;

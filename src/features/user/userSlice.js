import { createSlice } from '@reduxjs/toolkit';

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

const getThemeFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('theme')) || null;
};
const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      console.log(payload);
      //   localStorage.setItem('user', JSON.stringify(payload));
    },
    demoLogin: (state, { payload }) => {
      console.log(payload);
      state.user = payload;
    },
  },
});

export const { loginUser, demoLogin } = userSlice.actions;
export default userSlice.reducer;

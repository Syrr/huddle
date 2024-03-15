import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentProjectTab: 0,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setCurrentProjectTab: (state, { payload: { tabIndex } }) => {
      state.currentProjectTab = tabIndex;
    },
  },
});

export const { setCurrentProjectTab } = projectSlice.actions;

export default projectSlice.reducer;

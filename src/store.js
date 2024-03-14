import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './features/task/taskSlice';
import userSlice from './features/user/userSlice';

export default configureStore({
  reducer: {
    task: taskSlice,
    user: userSlice,
  },
});

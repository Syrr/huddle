import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './features/task/taskSlice';
import userSlice from './features/user/userSlice';
import ProjectSlice from './features/project/ProjectSlice';

export default configureStore({
  reducer: {
    task: taskSlice,
    user: userSlice,
    project: ProjectSlice,
  },
});

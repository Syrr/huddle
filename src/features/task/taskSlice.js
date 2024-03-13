import { createSlice } from '@reduxjs/toolkit';
import { currentSelectedWidgets } from '../../utils/data';

const initialState = {
  isLoading: false,
  taskTabs: ['ongoing', 'overdue', 'completed'],
  currentActiveWidgetID: currentSelectedWidgets[0].id,
  currentSelectedWidgets: currentSelectedWidgets,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTaskWidgetTab: (state, { payload: { widgetID, tabIndex } }) => {
      const UpdatedSelectedWidgets = state.currentSelectedWidgets.map(
        (widget) => {
          if (widget.id === widgetID) {
            return {
              ...widget,
              currentSelectedTab: tabIndex,
            };
          }

          return widget;
        }
      );

      return {
        ...state,
        currentActiveWidgetID: widgetID,
        currentSelectedWidgets: UpdatedSelectedWidgets,
      };
    },
  },
});

export const { setTaskWidgetTab } = taskSlice.actions;
export default taskSlice.reducer;

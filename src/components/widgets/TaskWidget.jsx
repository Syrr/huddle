import PlusIcon from '../../assets/PlusIcon';
import { CalendarSVG, CircleCheckmark } from '../../assets';
import { useSelector, useDispatch } from 'react-redux';
import { memo } from 'react';
import { setTaskWidgetTab } from '../../features/task/taskSlice';
import TaskWidgetHeader from './TaskWidgetHeader';

const TaskWidget = memo(
  ({ id: widgetID, title, tasks: userTasks, tabs, currentSelectedTab }) => {
    const dispatch = useDispatch();

    const handleCurrentTaskTab = (widgetID, tabIndex) => {
      dispatch(setTaskWidgetTab({ widgetID, tabIndex }));
    };

    return (
      <div className='bg-base-100 rounded-lg h-96 w-[590px] shadow-lg border-[1px] border-base-300 hover:border-neutral-content'>
        <TaskWidgetHeader
          title={title}
          tabs={tabs}
          currentSelectedTab={currentSelectedTab}
          handleCurrentTaskTab={handleCurrentTaskTab}
          widgetID={widgetID}
        />
        <div className='border-t-[1px] border-base-300 mb-4' />
        <div className='w-11/12 mx-auto border-base-300 border-b-[1px] pb-2 px-8'>
          <button
            type='button'
            className='flex items-center gap-1 capitalize text-xs bg-transparent rounded-md px-1 py-1.5 hover:bg-base-300'
          >
            <PlusIcon />
            <span className='text-primary font-semibold'>create task</span>
          </button>
        </div>

        {userTasks[currentSelectedTab]?.map((item) => {
          return (
            <div key={item.id} className='hover:bg-base-300'>
              <div className='w-11/12 mx-auto py-1.5 px-8 border-b-[1px] border-base-300 flex items-center justify-between capitalize text-sm '>
                <div className='flex gap-2 items-center'>
                  <CircleCheckmark />
                  {item.name}
                </div>
                <span className='flex items-center justify-center border-2 border-base-200 hover:border-primary w-6 h-6 rounded-full border-dashed border-content hover:bg-base-200 cursor-pointer'>
                  <CalendarSVG />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

export default TaskWidget;

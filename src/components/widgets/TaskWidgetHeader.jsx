import React from 'react';

const TaskWidgetHeader = ({
  widgetID,
  title,
  taskTabs,
  currentSelectedTab,
  handleCurrentTaskTab,
}) => {
  return (
    <>
      <header className='flex flex-col p-8 pb-0 font-semibold text-2xl capitalize mb-4'>
        {title}
      </header>
      <div className='pl-8 flex gap-4 capitalize text-xs font-medium'>
        {taskTabs?.map((tab, i) => {
          return (
            <span
              key={i}
              className={`${
                i === currentSelectedTab
                  ? 'border-b-2 border-primary cursor-pointer'
                  : 'pb-1 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-primary'
              }`}
              onClick={() => handleCurrentTaskTab(widgetID, i)}
            >
              {tab}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default TaskWidgetHeader;

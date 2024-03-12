import { useState } from 'react';
const tabs = [
  {
    id: 1,
    name: 'upcoming',
    text: 'upcoming',
  },
  {
    id: 2,
    name: 'overdue',
    text: 'overdue',
  },
  {
    id: 3,
    name: 'completed',
    text: 'completed',
  },
];
const TasksWidgetHeader = ({ title }) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <header className='flex flex-col p-8 pb-0 font-semibold text-2xl capitalize mb-4'>
        {title}
      </header>
      <div className='pl-8 flex gap-4 capitalize text-xs font-medium'>
        {tabs.map((tab) => {
          const { id, name: tabName, text } = tab;
          return (
            <span
              key={id}
              name={tabName}
              className={`${
                id === activeTab
                  ? 'border-b-2 border-primary cursor-pointer'
                  : 'pb-1 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-primary'
              }`}
              onClick={() => setActiveTab(id)}
            >
              {text}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default TasksWidgetHeader;

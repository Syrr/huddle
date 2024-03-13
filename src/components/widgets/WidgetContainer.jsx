import { useSelector, useDispatch } from 'react-redux';
import TaskWidget from './TaskWidget';

const WidgetContainer = () => {
  const { currentSelectedWidgets, taskTabs } = useSelector(
    (store) => store.task
  );

  return (
    <section className='grid grid-cols-2 grid-rows-2  gap-6 mx-auto'>
      {currentSelectedWidgets?.map((widget) => {
        return <TaskWidget key={widget.id} taskTabs={taskTabs} {...widget} />;
      })}
    </section>
  );
};

export default WidgetContainer;

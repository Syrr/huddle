import { useEffect, useState } from 'react';
import HeroSubHeader from '../components/HeroSubHeader';
import TaskWidget from '../components/widgets/TaskWidget';
import dayjs from 'dayjs';

const Home = () => {
  const formatTime = () => {
    const now = dayjs();

    return {
      hour: now.format('hh'),
      minute: now.format('mm'),
      second: now.format('ss'),
      meridiem: now.format('A'),
    };
  };
  const [currentTime, setCurrentTime] = useState(() => formatTime());
  const { hour, minute, second, meridiem } = currentTime;

  useEffect(() => {
    const timeID = setInterval(() => {
      console.log('in setInterval');
      setCurrentTime(formatTime());
    }, 1000);

    return () => {
      clearInterval(timeID);
    };
  }, []);
  return (
    <div className='flex flex-col'>
      <HeroSubHeader />
      <div className='w-full mx-auto flex justify-center'>
        <div className='flex flex-col  items-center'>
          <h6 className='text-base font-semibold'>Monday, March 11 </h6>
          <h2 className='text-4xl mb-4'>Good afternoon, Blood</h2>

          <span className='countdown font-mono text-4xl mb-6'>
            <span style={{ '--value': hour }}></span>:
            <span style={{ '--value': minute }}></span>:
            <span style={{ '--value': second }}></span>
          </span>
        </div>
      </div>
      <section className='grid grid-cols-2 grid-rows-2  gap-6 mx-auto'>
        <TaskWidget title='my tasks' />
        <TaskWidget title="tasks i've assigned" />
        <TaskWidget title='my tasks' />
        <TaskWidget title="tasks i've assigned" />
      </section>
      <div className='h-20' />
    </div>
  );
};

export default Home;

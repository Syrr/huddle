import { FaAngleDown } from 'react-icons/fa6';
import { CiStar } from 'react-icons/ci';
import { FaRegCircle } from 'react-icons/fa6';
import { useState } from 'react';
import { MultiUserSVG, UserSVG } from '../../assets/';

const ProjectHeader = ({ title }) => {
  const [statusEnter, setStatusEnter] = useState(false);
  return (
    <div className='flex items-center justify-between w-full p-6 pb-2 max-h-[72px] bg-base-200'>
      <div className='flex items-center capitalize text-2xl font-semibold gap-4'>
        <div className='flex items-center gap-4 text-md'>
          <span className='h-12 w-12 bg-emerald-500 rounded-lg' />
          {title}
        </div>
        <div className='flex items-center'>
          <span className='p-1 hover:bg-base-300 rounded-md cursor-pointer'>
            <FaAngleDown size={15} className='' />
          </span>
          <span className='p-1 hover:bg-base-300 rounded-md'>
            <CiStar size={15} className='hover:fill-accent cursor-pointer' />
          </span>
        </div>
        <div
          className='flex items-center text-sm font-normal px-2 py-1 gap-2 hover:bg-base-300 rounded-md cursor-pointer'
          onMouseEnter={() => setStatusEnter(true)}
          onMouseLeave={() => setStatusEnter(false)}
        >
          <FaRegCircle size={10} />
          <p>set status</p>
          {statusEnter && <FaAngleDown size={10} />}
        </div>
      </div>
      <div className='flex items-center gap-4 '>
        <div className='flex gap-2'>
          {Array.from({ length: 3 }, (_, i) => {
            return (
              <span
                key={i}
                className='flex items-center justify-center w-6 h-6  border-2 border-primary hover:border-primary hover:border-opacity-40 rounded-full border-dashed cursor-pointer'
              >
                <UserSVG />
              </span>
            );
          })}
        </div>
        <button
          type='button'
          className='btn btn-primary flex-nowrap px-2 min-h-2 h-8 capitalize  gap-1 rounded-md text-xs'
        >
          <MultiUserSVG />
          share
        </button>
      </div>
    </div>
  );
};

export default ProjectHeader;

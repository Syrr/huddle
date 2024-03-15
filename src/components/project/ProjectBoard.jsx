import { PlusIcon } from '../../assets';
import { IoIosArrowDown } from 'react-icons/io';

const ProjectBoard = () => {
  return (
    <>
      <header className='flex items-center bg-base-200 h-10 px-8 border-b-[1px] border-b-neutral-content '>
        <button
          type='button'
          className='flex items-center justify-between w-26 h-8  border-[1px] border-accent rounded-md'
        >
          <div className='hover:bg-accent hover:bg-opacity-40 hover:font-semibold rounded-md rounded-r-none'>
            <span className='flex items-center capitalize text-xs gap-1 border-r-[1px] border-accent p-2 h-full'>
              <PlusIcon />
              <p>add task</p>
            </span>
          </div>
          <div className='flex items-center hover:bg-accent hover:font-semibold hover:bg-opacity-40 h-full rounded-md rounded-l-none'>
            <IoIosArrowDown />
          </div>
        </button>
      </header>
    </>
  );
};

export default ProjectBoard;

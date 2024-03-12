import { GoPlus } from 'react-icons/go';

const NavLeft = () => {
  return (
    <div className='flex items-center gap-4'>
      <button
        type='button'
        className='btn btn-square min-h-7 h-7 w-7 rounded-md '
      >
        <svg
          className='fill-current'
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 512 512'
        >
          <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
        </svg>
      </button>
      <button
        type='button'
        className='btn min-h-7 h-7 capitalize px-2 rounded-md'
      >
        <span className='bg-primary rounded-full w-5 h-5 flex items-center justify-center'>
          <GoPlus />
        </span>
        create
      </button>
    </div>
  );
};

export default NavLeft;

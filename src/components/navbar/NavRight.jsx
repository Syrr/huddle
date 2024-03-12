const NavRight = () => {
  return (
    <div className='flex items-center gap-4'>
      <button className='btn min-h-8 h-8 w-8 border-0 p-0 rounded-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-bell'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
          <path d='M9 17v1a3 3 0 0 0 6 0v-1' fill='none' />
        </svg>
      </button>
      <div className='avatar online'>
        <div className='w-8 rounded-full'>
          <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
        </div>
      </div>
      {/* <div className='avatar offline'>
        <div className='w-8 rounded-full'>
          <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
        </div>
      </div> */}
    </div>
  );
};

export default NavRight;

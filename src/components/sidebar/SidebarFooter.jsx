import React from 'react';

const SidebarFooter = () => {
  return (
    <div className='p-4 border-t-[1px] border-t-neutral flex items-center justify-evenly'>
      <button className='btn btn-ghost  rounded-md min-h-8 h-8 p-0 w-16 border-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-user-plus'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
          <path d='M16 19h6' />
          <path d='M19 16v6' />
          <path d='M6 21v-2a4 4 0 0 1 4 -4h4' />
        </svg>
      </button>
      <div className='h-8 w-px bg-neutral'></div>
      <button
        type='button'
        className='btn btn-ghost  rounded-md min-h-8 h-8 p-0 w-16 border-none'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-settings'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z' />
          <path d='M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
        </svg>
      </button>
    </div>
  );
};

export default SidebarFooter;

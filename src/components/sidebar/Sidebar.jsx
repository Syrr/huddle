import React from 'react';
import SidebarTop from './SidebarTop';
import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';
import { sidebarLinks } from '../../utils/data';

const Sidebar = () => {
  return (
    <div className='w-60 max-w-60 flex flex-col justify-between h-full bg-base-100 border-r-[1px]  border-r-neutral '>
      <div>
        <SidebarTop sidebarLinks={sidebarLinks} />
        <SidebarBody sidebarLinks={sidebarLinks} />
      </div>
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;

import { NavLink } from 'react-router-dom';

const SidebarTop = ({ sidebarLinks }) => {
  return (
    <div className='p-4'>
      {sidebarLinks[0].links.map((link) => {
        const { id, name, path, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive, isPending }) =>
              isActive
                ? 'active flex bg-base-300 items-center rounded-md px-2 py-1 mb-2 capitalize gap-2 font-semibold'
                : isPending
                ? 'flex items-center rounded-md px-2 py-1 mb-2 capitalize gap-2'
                : 'flex hover:bg-base-200 items-center rounded-md px-2 py-1 mb-2 capitalize gap-2'
            }
          >
            {icon}
            {name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default SidebarTop;

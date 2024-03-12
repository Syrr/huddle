import { NavLink } from 'react-router-dom';
import { PlusIcon } from '../../assets';

const SbLink = ({
  type,
  id,
  name,
  path,
  icon,
  activeParent,
  handleActiveParent,
}) => {
  const truePath = type === 'subLink' ? `${path}/${id}` : path;

  return (
    <NavLink
      to={truePath}
      end
      className={({ isActive, isPending }) => {
        return isActive
          ? 'active flex justify-between bg-base-300 items-center rounded-md px-2 py-1 mb-2 capitalize gap-2 font-semibold'
          : isPending
          ? 'flex justify-between items-center rounded-md px-2 py-1 mb-2 capitalize gap-2'
          : 'flex justify-between hover:bg-base-200 items-center rounded-md px-2 py-1 mb-2 capitalize gap-2';
      }}
      onClick={() =>
        (name === 'projects' || name === 'workspaces') &&
        handleActiveParent(name, id)
      }
    >
      <div className='flex items-center gap-2'>
        <span
          className={` ${
            activeParent && activeParent.name === name ? 'rotate-90' : ''
          } hover:bg-neutral-content`}
        >
          {icon}
        </span>
        {name}
      </div>
      {type === 'link' && (
        <span className='hover:bg-neutral-content'>
          <PlusIcon />
        </span>
      )}
    </NavLink>
  );
};

export default SbLink;

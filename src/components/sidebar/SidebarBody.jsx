import SbLink from './SbLink';
import { useState } from 'react';

const SidebarBody = ({ sidebarLinks }) => {
  const [activeParent, setActiveParent] = useState(null);

  const handleActiveParent = (name, id) => {
    if (activeParent?.id === id) {
      setActiveParent(null);
      return;
    }
    setActiveParent({ ...activeParent, name, id });
  };

  return (
    <div className='border-t-[1px] border-t-neutral p-4'>
      {sidebarLinks[1].links.map((link, i) => {
        const { subLinks } = link;

        return (
          <div key={link.id}>
            <SbLink
              type='link'
              {...link}
              activeParent={activeParent}
              handleActiveParent={handleActiveParent}
            />
            {activeParent?.id === link.id &&
              subLinks.map((subLink) => {
                return (
                  <SbLink
                    type='subLink'
                    key={`sublink-${subLink.id}`}
                    {...subLink}
                  />
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarBody;

import NavLeft from './NavLeft';
import NavRight from './NavRight';
import SearchInput from '../SearchInput';
const Navbar = () => {
  return (
    <nav className='max-h-12 h-12 flex items-center px-4 justify-between bg-base-100 border-b-[1px] border-neutral'>
      <NavLeft />
      <SearchInput />
      <NavRight />
    </nav>
  );
};

export default Navbar;

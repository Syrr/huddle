import NavLeft from './NavLeft';
import NavRight from './NavRight';
import FormInput from '../FormInput';
import { MagGlassSVG } from '../../assets';

const Navbar = () => {
  return (
    <nav className='max-h-12 h-12 flex items-center px-4 justify-between bg-base-100 border-b-[1px] border-b-neutral-content'>
      <NavLeft />
      <div className='sm:min-w-60 md:min-w-72 lg:min-w-96 2xl:min-w-[430px]'>
        <FormInput
          type='search'
          icon={<MagGlassSVG />}
          name='search'
          size='input-sm'
          placeholder='search'
        />
      </div>
      <NavRight />
    </nav>
  );
};

export default Navbar;

import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

const HomeLayout = () => {
  return (
    <main className='flex flex-col h-screen w-screen'>
      <Navbar />
      <section className='flex h-full overflow-clip'>
        <Sidebar />
        <div className='grow bg-base-200 overflow-auto'>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default HomeLayout;

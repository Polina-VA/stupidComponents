import React, { useEffect } from 'react';
// import { Footer } from '@/widgets/Footer';
// import { Navbar } from '@/widgets/Navbar';
// import { Sidebar } from '@/widgets/Sidebar';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '@/shared/hooks/reduxHooks';
import { refreshAccessToken } from '@/entities/user';
import NavBar from '@/widgets/NavBar/NavBar';

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshAccessToken());
  }, [dispatch]);

  return (
    <>

      <NavBar />
      {/* <Sidebar /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

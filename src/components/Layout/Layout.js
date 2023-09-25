import { Outlet } from 'react-router-dom';
import cl from './Layout.module.css';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  console.log('ldlfcd');

  return (
    <div>
      <AppBar />
      <main className={cl.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;

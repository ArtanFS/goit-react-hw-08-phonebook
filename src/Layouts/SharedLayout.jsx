import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar';
import Loader from '../components/Loader';

const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        {/* <Suspense fallback={null}> */}
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};

export default SharedLayout;

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LinkAppBar from 'components/LinkAppBar';
import Loader from 'components/Loader';
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  return (
    <>
      <LinkAppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
export default SharedLayout;

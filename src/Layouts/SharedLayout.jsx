import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LinkAppBar } from 'components/LinkAppBar';
import Loader from '../components/Loader';

const SharedLayout = () => {
  return (
    <div>
      <LinkAppBar />
      <Suspense fallback={<Loader />}>
        {/* <Suspense fallback={null}> */}
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;

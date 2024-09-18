import { Outlet, ScrollRestoration } from 'react-router-dom';

import PageHeader from './PageHeader';
import Main from './Main';
import Footer from './Footer';

function AppLayout() {
  return (
    <>
      <ScrollRestoration />
      <PageHeader />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default AppLayout;

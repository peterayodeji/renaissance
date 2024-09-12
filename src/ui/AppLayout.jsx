import Footer from './Footer';
import Hero from './Hero';
import NewArrivals from './NewArrivals';
import PageHeader from './PageHeader';
import SubCategory from './SubCategory';

function AppLayout() {
  return (
    <main>
      <PageHeader />
      <Hero />
      <NewArrivals />
      <SubCategory />
      <Footer />
    </main>
  );
}

export default AppLayout;

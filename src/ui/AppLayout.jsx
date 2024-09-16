import Category from './Category';
import Footer from './Footer';
import Hero from './Hero';
import NewArrivals from './NewArrivals';
import PageHeader from './PageHeader';
import SubCategory from './SubCategory';

function AppLayout() {
  return (
    <>
      <PageHeader />

      <main className="min-h-screen">
        <Hero />
        <NewArrivals />
        <Category />
        <SubCategory />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;

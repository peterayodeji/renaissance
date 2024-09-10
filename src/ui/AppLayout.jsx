import Footer from './Footer';
import Hero from './Hero';
import NewArrivals from './NewArrivals';
import PageHeader from './PageHeader';

function AppLayout() {
  return (
    <main>
      <PageHeader />
      <Hero />
      <NewArrivals />
      <Footer />
    </main>
  );
}

export default AppLayout;

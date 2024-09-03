import Footer from './Footer';
import Hero from './Hero';
import PageHeader from './PageHeader';

function AppLayout() {
  return (
    <main>
      <PageHeader />
      {/* <div className="fixed inset-0 h-16 border-b bg-white"></div> */}
      <Hero />
      <Footer />
    </main>
  );
}

export default AppLayout;

import AppLayout from './ui/AppLayout';

function App() {
  return (
    <main>
      <AppLayout />

      <div className="relative h-[100vh]">
        <div className="absolute inset-0 mt-16 h-[calc(100vh-4rem)] bg-blue-200 2xl:mt-20 2xl:h-[calc(100vh-5rem)]"></div>
      </div>

      <footer className="h-48 bg-yellow-200"></footer>
    </main>
  );
}

export default App;

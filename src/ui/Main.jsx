function Main({ children }) {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col md:min-h-[calc(100vh-4rem)] lg:min-h-screen">
      <Filler />
      {children}
    </main>
  );
}

export default Main;

function Filler() {
  return <div className="hidden lg:block lg:h-16 2xl:h-20"></div>;
}

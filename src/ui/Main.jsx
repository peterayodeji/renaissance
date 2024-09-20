function Main({ children }) {
  return (
    <main className="min-h-screen">
      <div className={`h-14 md:h-16 2xl:h-20`}></div>
      {children}
    </main>
  );
}

export default Main;

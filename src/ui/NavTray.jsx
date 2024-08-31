function NavTray({ children }) {
  return (
    <div className="grid grid-cols-[1fr_50%] px-8 lg:grid-cols-[1fr_auto] xl:px-10 2xl:px-12">
      {children}
    </div>
  );
}

export default NavTray;

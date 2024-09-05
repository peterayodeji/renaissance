function Hero() {
  return (
    <>
      <div className="relative hidden h-[100vh] md:block">
        <div className="absolute inset-0 mt-16 h-[calc(100vh-4rem)] bg-stone-400 bg-[url('/header-des-w.jpg')] bg-cover bg-center bg-no-repeat 2xl:mt-20 2xl:h-[calc(100vh-5rem)]">
          <div className="absolute left-[50%] top-[50%] space-y-6 text-white [transform:translate(-50%,20%)]">
            <h1 className="text-5xl tracking-wide 2xl:text-6xl">Aura Line</h1>
            <p className="outlined-text text-base font-medium 2xl:text-lg">
              DISCOVER YOUR SIGNATURE STYLE
            </p>
            <button className="bg-gray-950 px-10 py-2 text-white 2xl:text-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* // #MOBILE HERO  */}
      <div className="space-y-4 px-2 py-14 text-center md:hidden">
        <img src="/header-mob-w.jpg" alt="Header" />
        <h1 className="text-xl tracking-wider sm:text-2xl">Aura Line</h1>
        <p className="text-sm font-medium">DISCOVER YOUR SIGNATURE STYLE</p>
        <button className="w-[70%] bg-gray-950 py-2 text-white">
          Shop Now
        </button>
      </div>
    </>
  );
}

export default Hero;

function Hero() {
  return (
    <div className="relative h-[100vh]">
      <div className="absolute inset-0 mt-16 h-[calc(100vh-4rem)] bg-stone-400 bg-[url('/header-des-w.jpg')] bg-cover bg-center bg-no-repeat 2xl:mt-20 2xl:h-[calc(100vh-5rem)]">
        <div className="bg-blue-00 absolute left-[50%] top-[50%] space-y-6 text-white [transform:translate(-50%,20%)]">
          <h1 className="text-5xl tracking-wide">Go Edition</h1>
          <p>ENJOY NEW ARRIVALS UP TO 45% OFF</p>
          <button className="bg-gray-950 px-10 py-2 text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import { usePathFinder } from '../hooks/usePathFinder';

const HERO_IMG = {
  women: {
    des: '/header-des-w.jpg',
    mob: '/header-mob-w.jpg',
  },
  men: {
    des: '/header-des-m.jpg',
    mob: '/header-mob-m.jpg',
  },
};

function Hero() {
  const path = usePathFinder();
  const imageUrl = HERO_IMG[path];

  return (
    <>
      {/* // # DESKTOP HERO  */}
      <div
        style={{ backgroundImage: `url(${imageUrl.des})` }}
        className={`relative hidden h-[calc(100vh-4rem)] bg-stone-400 bg-cover bg-center bg-no-repeat md:block 2xl:h-[calc(100vh-5rem)]`}
      >
        <div className="absolute left-[50%] top-[50%] space-y-6 text-white [transform:translate(-50%,20%)]">
          <h1 className="text-5xl tracking-wide 2xl:text-6xl">Aura Line</h1>
          <p className="outlined-text text-base font-medium 2xl:text-lg">
            DISCOVER YOUR SIGNATURE STYLE
          </p>
          <a
            href="#"
            className="inline-block bg-gray-950 px-10 py-2 text-white 2xl:text-lg"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* // # MOBILE HERO  */}
      <div className="space-y-4 pb-14 text-center md:hidden">
        <img src={imageUrl.mob} alt="Header" />
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

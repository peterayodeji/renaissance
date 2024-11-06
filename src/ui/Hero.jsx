import { Link } from 'react-router-dom';
import { usePathFinder } from '../hooks/usePathFinder';

const HERO_IMG = {
  women: {
    des: '/header-des-w.webp',
    mob: '/header-mob-w.webp',
  },
  men: {
    des: '/header-des-m.webp',
    mob: '/header-mob-m.webp',
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
        className={`relative hidden h-[calc(100vh-4rem)] max-h-[800px] bg-cover bg-center bg-no-repeat md:block xl:max-h-none 2xl:h-[calc(100vh-5rem)]`}
      >
        <div className="absolute bottom-[20%] left-[50%] space-y-6 text-white [transform:translate(-50%,20%)]">
          <h1 className="text-5xl tracking-wide 2xl:text-6xl">Aura Line</h1>
          <p>DISCOVER YOUR SIGNATURE STYLE</p>
          <Link
            to="/products"
            className="inline-block bg-black px-14 py-3 text-white shadow-sm"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* // # MOBILE HERO  */}
      <div className="space-y-4 pb-14 text-center md:hidden">
        <img src={imageUrl.mob} alt="Header" />
        <h1 className="text-xl tracking-wider sm:text-2xl">Aura Line</h1>
        <p className="text-sm font-medium">DISCOVER YOUR SIGNATURE STYLE</p>
        <Link
          to="/products"
          className="inline-block w-[70%] bg-gray-950 py-2 text-white"
        >
          Shop Now
        </Link>
      </div>
    </>
  );
}

export default Hero;

function Category() {
  return (
    <div className="bg-green-30 pb-10 pt-4 sm:pb-12 md:pb-16 xl:pt-8">
      <h2 className="bg-yellow-30 mb-10 text-center text-xl tracking-wide md:mb-12 md:text-2xl lg:text-3xl">
        SHOP BY ESSENTIALS
      </h2>

      <div className="grid grid-cols-2 gap-y-10 md:gap-y-12">
        {/* MEN'S / WOMEN'S Category */}
        <div>
          <img src="/women-startpage-3.webp" alt="Women Category" />
          <div className="bg-gray-40 pl-2 pt-2 text-sm sm:pl-4 sm:text-base md:pl-8 md:pt-3">
            <h5 className="font-semibold">TOPS</h5>
            <a href="#">EXPLORE</a>
          </div>
        </div>

        <div>
          <img src="/women-startpage-1.webp" alt="Women Category" />
          <div className="bg-gray-40 pl-2 pt-2 text-sm sm:pl-4 sm:text-base md:pl-8 md:pt-3">
            <h5 className="font-semibold">KNITWEARS</h5>
            <a href="#">EXPLORE</a>
          </div>
        </div>

        <div>
          <img src="/women-startpage-2.webp" alt="Women Category" />
          <div className="bg-gray-40 pl-2 pt-2 text-sm sm:pl-4 sm:text-base md:pl-8 md:pt-3">
            <h5 className="font-semibold">PANTS</h5>
            <a href="#">EXPLORE</a>
          </div>
        </div>

        <div>
          <img src="/women-startpage-3.webp" alt="Women Category" />
          <div className="bg-gray-40 pl-2 pt-2 text-sm sm:pl-4 sm:text-base md:pl-8 md:pt-3">
            <h5 className="font-semibold">DRESSES</h5>
            <a href="#">EXPLORE</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;

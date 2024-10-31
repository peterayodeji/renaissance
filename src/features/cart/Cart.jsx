import HeadingPrimary from '../../ui/HeadingPrimary';

function Cart() {
  return (
    <div className="bg-yellow-20 grow px-2 py-10 sm:px-4 md:px-8">
      <HeadingPrimary>Shopping bag</HeadingPrimary>

      <div className="bg-green-200">
        {/* HEAD */}
        <div className="hidden font-semibold lg:block">
          <div className="bg-blue-20 grid grid-cols-[130px_2fr_0.5fr_1fr_1fr_1fr_1fr_0.3fr] items-center gap-x-4 border-b py-4 lg:gap-x-8">
            <div></div>
            <div>Description</div>
            <div>Size</div>
            <div>Color</div>
            <div>Unit Price</div>
            <div>Quantity</div>
            <div>Price</div>
            <div></div>
          </div>
        </div>

        {/* BODY */}
        <div className="text-s bg-yellow-30">
          <div className="bg-green-30 relative grid grid-cols-[130px_1fr] grid-rows-[auto_auto_auto_auto_auto_auto] items-center gap-y-2 border-b border-t bg-white pb-6 pt-16 lg:auto-rows-auto lg:grid-cols-[130px_2fr_0.5fr_1fr_1fr_1fr_1fr_0.3fr] lg:grid-rows-1 lg:gap-x-8 lg:py-4 xl:py-2">
            <img
              src="/vivienne-westwood-multicolor-stuart-sweater.webp"
              alt="Product Image"
              className="row-span-5 h-[150px] lg:row-span-1 lg:justify-self-center"
            />

            <div className="bg-yellow-30 flex h-full flex-col xl:h-[120px]">
              <h4 className="pr-8 text-sm font-semibold uppercase sm:pr-0 sm:text-base">
                Multicolor Stuart Sweater
              </h4>

              <p className="pr-4 text-sm sm:text-base lg:text-sm">
                Knit nylon - and alpaca-blend sweater
              </p>

              <p className="mb-4 text-sm sm:text-base lg:mb-0 lg:text-sm">
                Only 1 remaining
              </p>

              <div className="mt-auto hidden lg:block">
                <div className="bg-purple-30 flex items-center gap-x-1 text-sm">
                  <img src="/heart.svg" alt="Favourite" className="w-5" />
                  <span>Take off wishlist</span>
                  {/* <span>Add to wishlist</span> */}
                </div>
              </div>
            </div>

            <div className="bg-blue-20 flex h-full gap-x-3 text-sm sm:text-base xl:h-[120px]">
              <span className="lg:hidden">Size:</span> <span>L</span>
            </div>

            <div className="bg-blue-20 flex h-full gap-x-3 text-sm sm:text-base xl:h-[120px]">
              <span className="lg:hidden">Color:</span> <span>Multi-color</span>
            </div>

            <div className="bg-red-20 col-start-2 row-start-5 flex h-full gap-x-3 text-sm sm:text-base lg:col-start-auto lg:row-start-auto xl:h-[120px]">
              <span className="lg:hidden">Price:</span> <span>USD 388</span>
            </div>
            <div className="bg-blue-20 flex h-full gap-x-3 text-sm sm:text-base xl:h-[120px]">
              <span className="lg:hidden">Quantity:</span> <span>- 1 +</span>
            </div>

            <div className="bg-purple-30 mt-8 flex items-center gap-x-1 text-sm lg:hidden">
              <img src="/heart.svg" alt="Favourite" className="w-5" />
              {/* <span>Take off wishlist</span> */}
              <span>Add to wishlist</span>
            </div>

            <div className="bg-blue-40 mt-8 text-right text-sm sm:text-base lg:mt-0 lg:h-full lg:text-left xl:h-[120px]">
              USD 388
            </div>

            <div className="bg-blue-10 absolute right-0 top-3 h-full text-sm lg:static lg:text-base xl:h-[120px]">
              X
            </div>
          </div>

          {/* HEYY */}
          <div className="bg-green-30 relative grid grid-cols-[130px_1fr] grid-rows-[auto_auto_auto_auto_auto_auto] items-center gap-y-2 border-b border-t bg-white pb-6 pt-16 lg:auto-rows-auto lg:grid-cols-[130px_2fr_0.5fr_1fr_1fr_1fr_1fr_0.3fr] lg:grid-rows-1 lg:gap-x-8 lg:py-4 xl:py-2">
            <img
              src="/vivienne-westwood-multicolor-stuart-sweater.webp"
              alt="Product Image"
              className="row-span-5 h-[150px] lg:row-span-1 lg:justify-self-center"
            />

            <div className="bg-yellow-30 flex h-full flex-col xl:h-[120px]">
              <h4 className="pr-8 text-sm font-semibold uppercase sm:pr-0 sm:text-base">
                Multicolor Stuart Sweater
              </h4>

              <p className="pr-4 text-sm sm:text-base lg:text-sm">
                Knit nylon - and alpaca-blend sweater
              </p>

              <p className="mb-4 text-sm sm:text-base lg:mb-0 lg:text-sm">
                Only 1 remaining
              </p>

              <div className="mt-auto hidden lg:block">
                <div className="bg-purple-30 flex items-center gap-x-1 text-sm">
                  <img src="/heart.svg" alt="Favourite" className="w-5" />
                  <span>Take off wishlist</span>
                  {/* <span>Add to wishlist</span> */}
                </div>
              </div>
            </div>

            <div className="bg-blue-20 flex h-full gap-x-3 text-sm sm:text-base xl:h-[120px]">
              <span className="lg:hidden">Size:</span> <span>L</span>
            </div>

            <div className="bg-blue-20 flex h-full gap-x-3 text-sm sm:text-base xl:h-[120px]">
              <span className="lg:hidden">Color:</span> <span>Multi-color</span>
            </div>

            <div className="bg-red-20 col-start-2 row-start-5 flex h-full gap-x-3 text-sm sm:text-base lg:col-start-auto lg:row-start-auto xl:h-[120px]">
              <span className="lg:hidden">Price:</span> <span>USD 388</span>
            </div>
            <div className="bg-blue-20 flex h-full gap-x-3 text-sm sm:text-base xl:h-[120px]">
              <span className="lg:hidden">Quantity:</span> <span>- 1 +</span>
            </div>

            <div className="bg-purple-30 mt-8 flex items-center gap-x-1 text-sm lg:hidden">
              <img src="/heart.svg" alt="Favourite" className="w-5" />
              {/* <span>Take off wishlist</span> */}
              <span>Add to wishlist</span>
            </div>

            <div className="bg-blue-40 mt-8 text-right text-sm sm:text-base lg:mt-0 lg:h-full lg:text-left xl:h-[120px]">
              USD 388
            </div>

            <div className="bg-blue-10 absolute right-0 top-3 h-full text-sm lg:static lg:text-base xl:h-[120px]">
              X
            </div>
          </div>

          <div className="bg-green-30 relative grid grid-cols-[130px_1fr] grid-rows-[auto_auto_auto_auto_auto_auto] items-center gap-y-2 border-b border-t bg-white pb-6 pt-16 lg:auto-rows-auto lg:grid-cols-[130px_2fr_0.5fr_1fr_1fr_1fr_1fr_0.3fr] lg:grid-rows-1 lg:gap-x-8 lg:py-4 xl:py-2">
            <img
              src="/vivienne-westwood-multicolor-stuart-sweater.webp"
              alt="Product Image"
              className="row-span-5 h-[150px] lg:row-span-1 lg:justify-self-center"
            />

            <div className="bg-yellow-30 flex h-full flex-col xl:h-[120px]">
              <h4 className="pr-8 text-sm font-semibold uppercase sm:pr-0 sm:text-base">
                Multicolor Stuart Sweater
              </h4>

              <p className="pr-4 text-sm sm:text-base lg:text-sm">
                Knit nylon - and alpaca-blend sweater
              </p>

              <p className="mb-4 text-sm sm:text-base lg:mb-0 lg:text-sm">
                Only 1 remaining
              </p>

              <div className="mt-auto hidden lg:block">
                <div className="bg-purple-30 flex items-center gap-x-1 text-sm">
                  <img src="/heart.svg" alt="Favourite" className="w-5" />
                  <span>Take off wishlist</span>
                  {/* <span>Add to wishlist</span> */}
                </div>
              </div>
            </div>

            <div className="bg-blue-20 flex h-full gap-x-3 text-sm sm:text-base xl:h-[120px]">
              <span className="lg:hidden">Size:</span> <span>L</span>
            </div>

            <div className="bg-blue-20 flex h-full gap-x-3 text-sm sm:text-base xl:h-[120px]">
              <span className="lg:hidden">Color:</span> <span>Multi-color</span>
            </div>

            <div className="bg-red-20 col-start-2 row-start-5 flex h-full gap-x-3 text-sm sm:text-base lg:col-start-auto lg:row-start-auto xl:h-[120px]">
              <span className="lg:hidden">Price:</span> <span>USD 388</span>
            </div>
            <div className="bg-blue-20 flex h-full gap-x-3 text-sm sm:text-base xl:h-[120px]">
              <span className="lg:hidden">Quantity:</span> <span>- 1 +</span>
            </div>

            <div className="bg-purple-30 mt-8 flex items-center gap-x-1 text-sm lg:hidden">
              <img src="/heart.svg" alt="Favourite" className="w-5" />
              {/* <span>Take off wishlist</span> */}
              <span>Add to wishlist</span>
            </div>

            <div className="bg-blue-40 mt-8 text-right text-sm sm:text-base lg:mt-0 lg:h-full lg:text-left xl:h-[120px]">
              USD 388
            </div>

            <div className="bg-blue-10 absolute right-0 top-3 h-full text-sm lg:static lg:text-base xl:h-[120px]">
              X
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

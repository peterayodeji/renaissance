// import { useProducts } from './useProducts';

import ProductsMap from './ProductsMap';

function ProductsList() {
  // const { isLoading, data, error } = useProducts();
  // console.log(isLoading, error, data);

  return (
    <>
      <ul className="bg-blue-80 grid grid-cols-2 gap-x-4 gap-y-12 py-8 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4">
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Multi-color Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Multi-color Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Multi-color Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Multi-color Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Multi-color Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Multi-color Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Multi-color Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Multi-color Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Multi-color Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Multi-color Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
        <li className="text-base sm:text-base">
          <img
            src="/vivienne-westwood-multicolor-stuart-sweater.webp"
            alt="Product Image"
          />
          <div>
            <p>Vivienne Multi-color Sweater</p>
            <div>$50.00</div>
          </div>
        </li>
      </ul>

      <div className="bg-stone-200 py-10 text-center">PAGINATION</div>

      <ProductsMap />

      {/* ERROR/LOADER */}
      <div className="absolute left-[50%] top-[45%] block translate-x-[-50%] translate-y-[-50%] transform bg-red-700 text-center">
        {/* <p>An error occured while loading products!</p> */}
        {/* <p>Loading...</p> */}
      </div>
    </>
  );
}

export default ProductsList;

import ScrollableListContainer from '../../ui/ScrollableListContainer';

function ProductsOperations({ filters }) {
  const btnRight = (
    <button className="flex h-full items-center justify-center bg-white pl-2 md:pl-4">
      <img
        src="/arrow-right.svg"
        alt="Right Arrow"
        className="h-5 md:h-6 lg:h-7"
      />
    </button>
  );

  const btnLeft = (
    <button className="flex h-full items-center justify-center bg-white pr-2 md:pr-4">
      <img
        src="/arrow-left.svg"
        alt="Left Arrow"
        className="h-5 md:h-6 lg:h-7"
      />
    </button>
  );

  console.log(filters);

  return (
    <div className="space-y-6 text-xs sm:text-sm md:text-base">
      <ScrollableListContainer
        fade={false}
        prevCustomBtn={btnLeft}
        nextCustomBtn={btnRight}
        style={{ columnGap: '0.75rem' }}
      >
        <li className="border border-black px-2 py-1">JEANS</li>
        <li className="border border-black px-2 py-1">BAGGY & LOOSE</li>
        <li className="border border-black px-2 py-1">SKINNY</li>
        <li className="border border-black px-2 py-1">SLIM FIT</li>
        <li className="border border-black px-2 py-1">
          REGULAR FIT & STRAIGHT
        </li>
        <li className="border border-black px-2 py-1">RELAXED</li>
        <li className="bg-black px-2 py-1 text-white">JOGGERS</li>
        <li className="border border-black px-2 py-1">JEANS</li>
        <li className="border border-black px-2 py-1">BAGGY & LOOSE</li>
        <li className="border border-black px-2 py-1">SKINNY</li>
        <li className="border border-black px-2 py-1">SLIM FIT</li>
        <li className="border border-black px-2 py-1">
          REGULAR FIT & STRAIGHT
        </li>
        <li className="border border-black px-2 py-1">RELAXED</li>
      </ScrollableListContainer>

      <div>SORT BY </div>
    </div>
  );
}

export default ProductsOperations;

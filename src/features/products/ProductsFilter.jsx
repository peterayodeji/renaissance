import ScrollableListContainer from '../../ui/ScrollableListContainer';

function ProductsFilter() {
  return (
    <ScrollableListContainer
      navigationBtn={false}
      style={{ columnGap: '0.5rem' }}
    >
      <li className="bg-black px-2 py-1 text-white">ALL</li>
      <li className="border border-black px-2 py-1">JEANS</li>
      <li className="border border-black px-2 py-1">SLIM FIT</li>
      <li className="border border-black px-2 py-1">SKINNY</li>
      <li className="border border-black px-2 py-1">REGULAR FIT & STRAIGHT</li>
      <li className="border border-black px-2 py-1">RELAXED</li>
      <li className="border border-black px-2 py-1">JEANS</li>
      <li className="border border-black px-2 py-1">BAGGY & LOOSE</li>
      <li className="border border-black px-2 py-1">SKINNY</li>
      <li className="border border-black px-2 py-1">SLIM FIT</li>
      <li className="border border-black px-2 py-1">REGULAR FIT & STRAIGHT</li>
      <li className="border border-black px-2 py-1">RELAXED</li>
    </ScrollableListContainer>
  );
}

export default ProductsFilter;

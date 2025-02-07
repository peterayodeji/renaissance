function CartItemImage({ biteSize }) {
  return (
    <img
      src="/vivienne-westwood-multicolor-stuart-sweater.webp"
      alt="Product Image"
      className={`row-span-5 h-[150px] ${!biteSize ? 'lg:row-span-1 lg:justify-self-center' : ''}`}
    />
  );
}

export default CartItemImage;

function CartWishlist({ children }) {
  return (
    <button className={`flex items-center gap-x-1 text-sm`}>
      <img src="/heart.svg" alt="Favourite" className="w-5" />
      <span>{children}</span>
    </button>
  );
}

export default CartWishlist;

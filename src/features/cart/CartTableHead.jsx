function CartTableHead() {
  return (
    <div className="hidden grid-cols-[130px_2fr_0.5fr_1fr_1fr_1fr_1fr_0.3fr] items-center gap-x-8 py-4 font-semibold lg:grid">
      <div></div>
      <div>Description</div>
      <div>Size</div>
      <div>Color</div>
      <div>Unit Price</div>
      <div>Quantity</div>
      <div>Price</div>
      <div></div>
    </div>
  );
}

export default CartTableHead;

function CartEmpty() {
  return (
    <div className="bg-fuchsia-40 md:w-[320px] lg:w-[30%]">
      <h3 className="mb-2 font-semibold uppercase">
        Your Shopping Bag is Empty!
      </h3>
      <p className="mb-16">
        Your shopping bag is currently empty. Add products to shopping bag for
        purchase.
      </p>
    </div>
  );
}

export default CartEmpty;

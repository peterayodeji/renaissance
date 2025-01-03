import { useSelector } from 'react-redux';
import { isEmptyCart, getTotalCartPrice } from './cartSlice';

function CartSummary() {
  const isEmpty = useSelector(isEmptyCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const promotion = totalCartPrice >= 100 ? totalCartPrice * 0.15 : 0;
  const totalSummaryVal = totalCartPrice - promotion;

  return (
    <div className="space-y-4">
      <h5 className="lg:hidden">CART SUMMARY</h5>

      {!isEmpty && (
        <div>
          <CartSummaryItem>
            <p>Original price</p>

            <CartSummaryValue>
              <span>$</span>
              <span>{totalCartPrice.toFixed(2)}</span>
            </CartSummaryValue>
          </CartSummaryItem>

          <CartSummaryItem>
            <p>Promotion</p>

            <CartSummaryValue>
              <span>-$</span>
              <span>{promotion.toFixed(2)}</span>
            </CartSummaryValue>
          </CartSummaryItem>

          <CartSummaryItem>
            <p>Delivery fee</p>

            <CartSummaryValue>
              <span>&nbsp;</span>
              <span>TBD</span>
            </CartSummaryValue>
          </CartSummaryItem>
        </div>
      )}

      {isEmpty && (
        <CartSummaryItem>
          <p className="mb-4">Original price</p>

          <CartSummaryValue>
            <span>$</span>
            <span>0.00</span>
          </CartSummaryValue>
        </CartSummaryItem>
      )}

      <CartSummaryItem>
        <p>TOTAL</p>
        <CartSummaryValue>
          <span>$</span>
          <span>{!isEmpty ? totalSummaryVal.toFixed(2) : '0.00'}</span>
        </CartSummaryValue>
      </CartSummaryItem>
    </div>
  );
}

export default CartSummary;

function CartSummaryItem({ children }) {
  return <div className="flex justify-between">{children}</div>;
}

function CartSummaryValue({ children }) {
  return (
    <div className="uppercase [&>*:nth-child(2)]:font-semibold">{children}</div>
  );
}

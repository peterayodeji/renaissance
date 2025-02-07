import { useSelector } from 'react-redux';
import { isEmptyCart, getTotalCartPrice } from './cartSlice';
import { calcPay } from '../../utils/helpers';

function CartSummary({ children, shippingCost }) {
  const isEmpty = useSelector(isEmptyCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const { totalPay, promoPrice } = calcPay({
    totalCartPrice,
    shippingCost,
  });

  return (
    <div className="space-y-4">
      {children}
      {!shippingCost && <h5 className="lg:hidden">CART SUMMARY</h5>}

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
              <span>{promoPrice.toFixed(2)}</span>
            </CartSummaryValue>
          </CartSummaryItem>

          <CartSummaryItem>
            <p>Shipping cost</p>

            <CartSummaryValue>
              <span>{shippingCost == null ? '' : '$'}</span>
              <span>
                {shippingCost == null ? 'TBD' : shippingCost.toFixed(2)}
              </span>
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
          <span>{!isEmpty ? totalPay.toFixed(2) : '0.00'}</span>
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

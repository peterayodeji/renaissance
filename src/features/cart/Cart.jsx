import { useSelector } from 'react-redux';
import { isEmptyCart } from './cartSlice';

import HeadingPrimary from '../../ui/HeadingPrimary';
import CartTable from './CartTable';
import CartEmpty from './CartEmpty';
import CartInfoActions from './CartInfoActions';

function Cart() {
  const isEmpty = useSelector(isEmptyCart);

  return (
    <div className="bg-yellow-20 grow px-2 pb-12 pt-10 sm:px-4 md:px-8">
      <HeadingPrimary>Shopping bag</HeadingPrimary>

      <div
        className={`grid grid-cols-1 items-end justify-between gap-y-8 md:gap-y-0 lg:grid-cols-1 ${!isEmpty ? 'md:grid-cols-[320px_320px]' : ''}`}
      >
        {!isEmpty && <CartTable />}

        <div className="bg-amber-70 bottom-10 flex flex-col md:sticky md:flex-row lg:static">
          {isEmpty && <CartEmpty />}
          <CartInfoActions />
        </div>
      </div>
    </div>
  );
}

export default Cart;

import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../services/apiProducts';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './productsSlice';

export function useProduct() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  // * QUERY
  const {
    isLoading,
    data: { product, similarProducts } = {},
    isSuccess,
    error,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById({ productId }),
  });

  const staleProduct = useMemo(() => product, [product]);

  useEffect(
    function () {
      if (isSuccess && staleProduct) {
        const { id, name, price } = staleProduct;
        dispatch(addProduct({ id, name, price }));
      }
    },
    [isSuccess, staleProduct, dispatch],
  );

  return { isLoading, product, similarProducts, error };
}

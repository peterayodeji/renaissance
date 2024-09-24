import { useProducts } from './useProducts';

function ProductsList() {
  const { isLoading, data, error } = useProducts();
  console.log(isLoading, error, data);

  return <div className="bg-red-40">ProductsList</div>;
}

export default ProductsList;

import ProductColorBtn from './ProductColorBtn';

function ProductColorSwatches({
  productId,
  productColor,
  colorOptions,
  setColorName,
  ultra = false,
}) {
  if (!Array.isArray(colorOptions) || colorOptions.length < 1) return;

  return (
    <div
      className={`bg-yellow-40 mt-2 flex items-start ${ultra ? 'gap-x-3' : 'gap-x-1'}`}
    >
      <ProductColorBtn
        colorValue={productColor.value}
        productId={productId}
        disabled={ultra}
        ultra={ultra}
      />

      <div className={`flex ${ultra ? 'gap-x-3' : 'gap-x-1'}`}>
        {colorOptions.map(color => (
          <ProductColorBtn
            key={color.productId}
            colorValue={color.value}
            productId={color.productId}
            changeColorName={setColorName && (() => setColorName(color.name))}
            resetColorName={
              setColorName && (() => setColorName(productColor.name))
            }
            ultra={ultra}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductColorSwatches;

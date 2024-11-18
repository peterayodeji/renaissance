import { useState } from 'react';
import ProductColorSwatches from './ProductColorSwatches';

function ProductColor({ productId, productColor, colorOptions }) {
  const [colorName, setColorName] = useState(productColor.name);

  return (
    <div>
      <p>Color: {colorName}</p>

      <ProductColorSwatches
        productId={productId}
        productColor={productColor}
        colorOptions={colorOptions}
        setColorName={setColorName}
        ultra={true}
      />
    </div>
  );
}

export default ProductColor;

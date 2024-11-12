import { useState } from 'react';

function ProductColor({ color, colorOptions }) {
  const { name, value } = color;
  const [colorName, setColorName] = useState(name);

  return (
    <div>
      <p className="mb-2">Color: {colorName}</p>

      {Array.isArray(colorOptions) && colorOptions.length > 0 && (
        <div className="mb-2 flex gap-x-3">
          <ColorBtn colorValue={value} disabled={true} />

          <div className="flex gap-x-3">
            {colorOptions.map(color => (
              <ColorBtn
                key={color.productId}
                colorValue={color.value}
                productId={color.productId}
                changeColorName={() => setColorName(color.name)}
                resetColorName={() => setColorName(name)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductColor;

function ColorBtn({
  colorValue,
  productId,
  changeColorName,
  resetColorName,
  disabled = false,
}) {
  return (
    <button
      onClick={() => console.log(productId)}
      onMouseEnter={changeColorName}
      onMouseLeave={resetColorName}
      disabled={disabled}
      className="cursor-pointer border-black px-1 pb-2 disabled:cursor-default disabled:border-b"
    >
      <div
        style={{ backgroundColor: colorValue }}
        className="h-4 w-4 border border-stone-300 shadow-sm"
      />
    </button>
  );
}

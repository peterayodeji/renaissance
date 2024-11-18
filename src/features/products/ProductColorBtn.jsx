function ProductColorBtn({
  colorValue,
  productId,
  disabled = false,
  changeColorName,
  resetColorName,
  ultra,
}) {
  const optionalProps =
    changeColorName && resetColorName
      ? { onMouseEnter: changeColorName, onMouseLeave: resetColorName }
      : '';

  return (
    <button
      onClick={() => console.log(productId)}
      disabled={disabled}
      {...optionalProps}
      className={`cursor-pointer border-black disabled:cursor-default disabled:border-b ${ultra && 'px-1 pb-2'}`}
    >
      <div
        style={{ backgroundColor: colorValue }}
        className={`border border-black shadow-sm ${ultra ? 'h-4 w-4' : 'h-2 w-2'}`}
      />
    </button>
  );
}

export default ProductColorBtn;

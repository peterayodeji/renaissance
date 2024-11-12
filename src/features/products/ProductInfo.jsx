import ProductColor from './ProductColor';

function ProductInfo({ product }) {
  const { name, description, features, color, colorOptions, composition } =
    product;

  return (
    <article className="bg-blue-40 flex items-center lg:sticky lg:bottom-0 lg:h-[calc(100vh-4rem)] lg:pl-8 xl:px-10 2xl:h-[calc(100vh-5rem)] 2xl:px-12">
      <div className="bg-cyan-40 w-full space-y-4 text-sm">
        <h3 className="font-mediu hidden uppercase lg:block">{name}</h3>

        <h3 className="lg:hidden">ITEM INFO</h3>

        <p>{description}</p>

        <ul>
          {features.map(feature => (
            <li key={feature}>· {feature}</li>
          ))}
        </ul>

        <div className="bg-amber-30">
          <p className="mb-2">{composition}</p>
        </div>

        <ProductColor color={color} colorOptions={colorOptions} />
      </div>
    </article>
  );
}

export default ProductInfo;

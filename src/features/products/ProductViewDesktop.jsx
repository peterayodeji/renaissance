function ProductViewDesktop({ images, setZoomViewIndex }) {
  return (
    <main className="bg-yellow-30 space-y-16 pb-16 pt-2">
      {images.map((img, index) => (
        <div
          // Later: use url (img) itself as key in all places
          key={index}
          onClick={() => setZoomViewIndex(index)}
          className="bg-green-30 hover:cursor-zoom-in"
        >
          <img src={img} alt="Product Image" className="mx-auto w-[70%]" />
        </div>
      ))}
    </main>
  );
}

export default ProductViewDesktop;

function PageNotFound() {
  return (
    <div className="bg-blue-40 flex flex-grow items-center justify-center">
      <div className="mb-14 text-center md:mb-16 2xl:mb-20">
        <h3 className="mb-6 text-2xl font-semibold md:text-3xl">
          PAGE NOT FOUND!
        </h3>
        <p>
          The page you&#39;re looking for <br /> is currently unavailable.
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;

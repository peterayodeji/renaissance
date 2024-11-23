function FormRow({ label, error, children }) {
  return (
    <div className="flex flex-1 flex-col">
      {label && (
        <label htmlFor={children.props.id} className="mb-2">
          {label}
        </label>
      )}

      {children}

      <span className="mt-1 text-red-600">{error}</span>
    </div>
  );
}

export default FormRow;

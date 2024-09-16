function RadioButton({ options, selectedOption, onSelectOption }) {
  return (
    <>
      {options.map(({ value, label }) => (
        <label
          key={value}
          htmlFor={value}
          className="flex cursor-pointer items-center gap-x-2"
        >
          <div className="relative flex h-5 w-5 items-center justify-center border-2 border-gray-900">
            <input
              type="radio"
              name="gender"
              value={value}
              id={value}
              checked={selectedOption === value}
              onChange={e => onSelectOption(e.target.value)}
              className="peer hidden"
            />

            <span className="z-10 mb-[1px] ml-[6px] hidden peer-checked:inline-block">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7072 5.29289C17.0977 5.68342 17.0977 6.31658 16.7072 6.70711L8.70717 14.7071C8.31664 15.0976 7.68348 15.0976 7.29295 14.7071L3.29295 10.7071C2.90243 10.3166 2.90243 9.68342 3.29295 9.29289C3.68348 8.90237 4.31664 8.90237 4.70717 9.29289L8.00006 12.5858L15.293 5.29289C15.6835 4.90237 16.3166 4.90237 16.7072 5.29289Z"
                  fill="#111827"
                />
              </svg>
            </span>

            <span className="absolute right-[-2px] top-[-2px] hidden h-3 w-[2px] bg-stone-100 peer-checked:inline-block"></span>
          </div>

          <span>{label}</span>
        </label>
      ))}
    </>
  );
}

export default RadioButton;

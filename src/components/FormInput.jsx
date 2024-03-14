const FormInput = ({ type, icon, name, size, placeholder, handleChange }) => {
  return (
    <>
      <label
        className={`input input-bordered  ${size} shadow-md flex items-center gap-2 focus-within:outline-none`}
      >
        {icon}
        <input
          type={type}
          className={`grow`}
          placeholder={placeholder}
          onChange={(e) => handleChange(e, name)}
        />
      </label>
    </>
  );
};

export default FormInput;

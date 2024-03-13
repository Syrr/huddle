const FormInput = ({ type, icon, name, size, placeholder }) => {
  return (
    <>
      <label
        className={`input input-bordered  ${size} shadow-md flex items-center gap-2 focus-within:outline-none`}
      >
        {icon}
        <input type={type} className={`grow`} placeholder={placeholder} />
      </label>
    </>
  );
};

export default FormInput;

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  ...rest
}) => {
  return (
    <div className='form-group'>
      {label && (
        <label htmlFor={name} className='sr-only'>
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        {...rest}
      />
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};
export default Input;

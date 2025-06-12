function Input({ type = 'text', placeholder, value, handleInputChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
}

export default Input;
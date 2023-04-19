const Input = (props) => {
    const {text, onChange} = props;
  return (
    <input
      type="text"
      value={text}
      className="w-full focus:outline-none border-none text-xl p-1"
      placeholder="la tua opinione..."
      onChange={onChange}
      style={{
        width: "100%",
        border: "none",
        fontSize: "1rem",
        padding: "5px",
      }}
    />
  );
};

export default Input;

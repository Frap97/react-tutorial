const Icon = (props) => {
  return (
    <div className="flex justify-center items-center w-10 h-10 m-5 cursor-pointer">
      <span className="cursor-pointer">{props.icon}</span>
    </div>
  );
};

export default Icon;

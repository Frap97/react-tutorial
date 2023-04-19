import PropTypes from "prop-types";
import Icon from "./Icon";

const Header = (props) => {

  return (
    <header className="w-full h-10vh flex justify-end items-center text-4xl font-bold text-white bg-dark-green">
      <div className="w-full flex justify-center">
        <h1>{props.title}</h1>
      </div>
      <Icon icon={props.icon}/>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element
};

export default Header;

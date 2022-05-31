import * as I from "./styles";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const ShowPassword = ({ show, name, onClick }) => {
  if (name === "password" && show) {
    return <IoMdEye onClick={onClick} className="show_password" />;
  } else if (name === "password" && !show) {
    return <IoMdEyeOff onClick={onClick} className="show_password" />;
  }
};

const Input = ({
  icon: Icon,
  name,
  type = "text",
  placeholder,
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handleShowPassword = () => {
    if (showPassword) {
      setInputType("password");
      setShowPassword(false);
    } else {
      setInputType("text");
      setShowPassword(true);
    }
  };

  return (
    <I.Container>
      <Icon className="icon" />
      <I.Input {...register(name)} placeholder={placeholder} type={inputType} />
      <ShowPassword
        name={name}
        show={showPassword}
        onClick={handleShowPassword}
      />
      {/* <span>{error}</span> */}
    </I.Container>
  );
};

export default Input;

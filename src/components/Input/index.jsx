import * as I from "./styles";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const ShowPassword = ({ show, name, onClick }) => {
  if (name === "password" && show) {
    return <IoMdEye onClick={onClick} />;
  } else if (name === "password" && !show) {
    return <IoMdEyeOff onClick={onClick} />;
  }
};

const Input = ({ icon: Icon, name, type = "text", placeholder }) => {
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
      <Icon />
      <input placeholder={placeholder} type={inputType} />
      <ShowPassword
        name={name}
        show={showPassword}
        onClick={handleShowPassword}
      />
    </I.Container>
  );
};

export default Input;
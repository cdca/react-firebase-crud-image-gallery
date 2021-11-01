import React from "react";
import spinner from "./spinner.svg";
import { SpinnerText, StyledSpinner } from "./Spinner.style";

const Spinner = () => {
  return <StyledSpinner src={spinner} />;
};

export default Spinner;

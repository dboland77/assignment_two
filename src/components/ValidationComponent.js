import React from "react";

const ValidationComponent = (props) => {
  return (
    <p> The input length is {props.textlength >= 8 ? "OK - thank you.":"too short, please enter a minimum of 8 characters."}</p>
  )

};

export default ValidationComponent;

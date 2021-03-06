import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;
  margin-top: 10px;
  margin-left: 70px;

  & > input {
    border: 1px solid #eee;
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 3px 3px 12px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
    ${props => props.focused && `
    border-color: #3EB595;
    `}
  }
  & > label {
    color: #757575;
    position: absolute;
    top: 9px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    ${props =>
      props.focused &&
      `
      font-size: 13px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: white;
      padding: 0 8px;
    `}
  }
`;
/**
 * A Plaid-inspired custom input component
 *
 * @param {string} value - the value of the controlled input
 * @param {string} type - the type of input we'll deal with
 * @param {string} label - the label used to designate info on how to fill out the input
 * @param {function} onChange - function called when the input value changes
 * @param {function} onFocus - function called when the input is focused
 * @param {function} onBlur - function called when the input loses focus
 * @param {function} setRef - function used to add this input as a ref for a parent component
 */
const Input = ({
  value,
  type,
  label,
  onFocus,
  onBlur,
  setRef,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const renderLabel = () => label && <label>{label}</label>;

  const isFocused = focused || String(value).length;


  return (
    <InputContainer focused={isFocused}>
      {renderLabel()}
      <input
        type={type}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={ref => setRef(ref)}
        {...props}
      />
    </InputContainer>
  );
};

Input.defaultProps = {
  type: "text",
  label: "",
  onChange: text => {
    console.error(`Missing onChange prop: ${text}`);
  },
  onFocus: () => {},
  onBlur: () => {},
  setRef: () => {}
};

export default Input;
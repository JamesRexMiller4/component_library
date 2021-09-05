import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const InputWrapper = styled.div`
    width: fit-content;
    outline: none;
    display: flex;
    align-items: center;
    border-bottom: ${props => props.size === "large" ? "2px solid black" : "1px solid black"};
    padding: 4px 0px;

    &:focus {
      outline: blue;
      border: 1px solid blue;
      border-radius: 5px;
      transition: none;
    }
  `

  const Input = styled.input`
    width: inherit;
    outline: none;
    border: none;
    color: ${COLORS.gray700};
    padding-left: 10px;
    text-align: baseline;
    border-radius: 5px;
    font-size: ${props => props.size === "large" ? "1.2rem" : "1rem"};
    font-weight: bold;

    &::placeholder {
      font-weight: normal;
      color: ${COLORS.gray500};
    }

    &:hover {
      color: black;
      transition: .5s ease-in-out;
    }
  `
  
  return (
    <InputWrapper type="text" tabIndex={1} aria-label={label} size={size}>
      <Icon id={icon}/>
      <VisuallyHidden>
        <label htmlFor="search">{label}</label>
      </VisuallyHidden>
      <Input name='search' type="text" placeholder={placeholder} style={{ width }} size={size}/>
    </InputWrapper>
  );
};

export default IconInput;

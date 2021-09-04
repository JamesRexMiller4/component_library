import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const ManagedSelect = styled.select`
    width: inherit;
    padding: 0px 40px;
    background-color: transparent;
    color: transparent;
    border: transparent;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: absolute;
  `

  const Wrapper = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    background-color: ${COLORS.gray50};
    border-radius: 5px;
    color: ${COLORS.gray500};
    transition: none;


    &:focus {
      outline: default;
      border: blue;
      border-radius: 5px;
      transition: none;
    }


    &:hover {
      color: revert;
      transition: .5s ease-in-out;
    }
  `

  const DisplaySpan = styled.span`
    padding-right: 12px;
  `

  return (
    <Wrapper tabIndex={1} aria-label={label}>
      <DisplaySpan>{displayedValue}</DisplaySpan>
      <Icon id={"chevron-down"}/>
      <ManagedSelect value={value} onChange={onChange}>
        {children}
      </ManagedSelect>
    </Wrapper>
  );
};

export default Select;

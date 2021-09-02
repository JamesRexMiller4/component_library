/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  switch(size) {
    case "small": return (
    <SmallBase role="meter" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" tabIndex={1}>
      <Bar value={value}>
        <VisuallyHidden>{value}</VisuallyHidden>
      </Bar>
    </SmallBase>
  );
    case "medium": return (
    <WrapperBase role="meter" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" tabIndex={1}>
      <Bar value={value}>
        <VisuallyHidden>{value}</VisuallyHidden>
      </Bar>
    </WrapperBase>
    );
    case "large": return (<LargeBase role="meter" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" tabIndex={1}>
    <LargeBar value={value}>
      <VisuallyHidden>{value}</VisuallyHidden>
    </LargeBar>
  </LargeBase>)
  }
  return (
  <WrapperBase role="meter" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" tabIndex={1}>
    <Bar value={value}>
      <VisuallyHidden>{value}</VisuallyHidden>
    </Bar>
  </WrapperBase>
  
  );
};

const WrapperBase = styled.section`
  width: inherit;
  max-width: 50%;
  height: 15px;
  max-height: 5vh;
  background-color: ${COLORS.transparentGray15};
  border-radius: 7px;
  box-shadow: inset 0px 1px 3px 0px ${COLORS.transparentGray35};
  position: relative;
`
const Bar = styled.strong`
  width: ${props => props.value}%;
  background-color: ${COLORS.primary};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: ${props => props.value < 99 ? "6px 0px 0px 6px" : props.value < 100 ? "4px" : "6px"};
  transition: 1s ease-in-out;
`

const LargeBase = styled(WrapperBase)`
  height: 30px;
  max-height: 6vh;
`

const LargeBar = styled(Bar)`
  width: ${props => props.value - 1.5}%;
  left: 4px;
  right: 4px;
  top: 4px;
  bottom: 4px;
  border-radius: ${props => props.value < 99 ? "3px 0px 0px 3px" : props.value < 100 ? "2px" : "3px"};
`

const SmallBase = styled(WrapperBase)`
  height: 10px;
  max-height: 3vh;
`

export default ProgressBar;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFormItem = styled.div`
  width: 100%;
  margin: 24px 0;
  position: relative;
  flex-shrink: 0;
`;

const StyledInput = styled.input`
  color: ${({ theme }) => theme.color.primary};
  font-size: 24px;
  border: none;
  line-height: 22px;
  height: 100%;
  background: none;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:focus + label {
    top: -22px;
    font-size: 18px;
  }

  &:not(:placeholder-shown) + label {
    top: -22px;
    font-size: 18px;
  }
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.primary};
  position: absolute;
  top: 3px;
  left: 0;
  transition: 0.2s ease-in-out;
  font-size: 24px;
  pointer-events: none;
`;

const StyledBar = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.color.red};
  transition: all 0.1s;
`;

const FormItem = ({ id, type, onChange, className }) => (
  <StyledFormItem>
    <StyledInput className={className} id={id} type={type} placeholder=" " onChange={onChange} />
    <StyledLabel htmlFor={id}>{id}</StyledLabel>
    <StyledBar />
  </StyledFormItem>
);

export { StyledFormItem, StyledInput, StyledLabel, StyledBar };
export default FormItem;

FormItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

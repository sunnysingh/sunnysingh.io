import React from 'react';
import styled, { css } from 'styled-components';
import { Info, Edit, AlertCircle, DollarSign } from 'react-feather';
import { breakpoints } from '../config';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  padding: 1rem 1.5rem;
  border: 1px solid;
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: row;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  flex-grow: 1;
  margin-top: 0.5rem;
  font-size: 1.3125rem;
  line-height: 1.5;
  text-align: center;

  @media (min-width: ${breakpoints.medium}px) {
    margin-top: 0;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const icons = {
  info: <Info size={32} />,
  warning: <AlertCircle size={32} />,
  draft: <Edit size={32} />,
  sponsor: <DollarSign size={32} />,
};

export default function Alert({ type = 'info', children, ...otherProps }) {
  return (
    <Container type={type} {...otherProps}>
      <Icon>{icons[type]}</Icon>
      <Text>{children}</Text>
    </Container>
  );
}

export function AlertLink(props) {
  return <a {...props} />;
}

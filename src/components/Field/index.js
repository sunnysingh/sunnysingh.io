import React from 'react';
import { AccessibleText } from '../ScreenReader';
import { Container, Input } from './styled';

export default function Field({ id, label, ...otherProps }) {
  return (
    <Container>
      {label && (
        <AccessibleText as="label" for={id}>
          {label}
        </AccessibleText>
      )}
      <Input id={id} name={id} placeholder={label} {...otherProps} />
    </Container>
  );
}

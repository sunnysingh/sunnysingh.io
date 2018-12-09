import React from 'react';
import styled from 'styled-components';

const FooterLayout = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #5c5c69;
`;

export default function Footer() {
  return (
    <FooterLayout role="contentinfo">
      <Copyright>© 2019 Sunny Singh</Copyright>
    </FooterLayout>
  );
}

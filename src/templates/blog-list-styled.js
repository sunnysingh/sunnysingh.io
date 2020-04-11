import styled, { css } from 'styled-components';

export const Pagination = styled.nav`
  display: flex;
`;

export const PaginationItem = styled.div`
  flex-basis: 100%;

  ${(props) =>
    !props.isShowingOneItem &&
    css`
      flex-basis: 50%;
    `}

  &:last-child {
    display: flex;

    ${(props) =>
      props.type === 'next' &&
      css`
        justify-content: flex-end;
      `}
  }
`;

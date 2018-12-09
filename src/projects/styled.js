import styled from 'styled-components';

export const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProjectsItem = styled.li`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-basis: 50%;

    &:nth-child(odd) {
      padding-right: 2rem;
    }
  }
`;

export const ProjectsLink = styled.a`
  display: block;
  height: 100%;
  padding: 4rem;
  text-decoration: none;
  background-color: #15151c;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export const ProjectsHeading = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

export const ProjectsDescription = styled.p`
  margin-bottom: 2rem;
  line-height: 1.2em;
`;

export const ProjectsAction = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

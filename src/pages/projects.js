import React from 'react';
import { Layout, Container } from '../components';
import {
  ProjectsList,
  ProjectsItem,
  ProjectsLink,
  ProjectsHeading,
  ProjectsDescription,
  ProjectsAction,
} from '../projects/styled';
import { PROJECTS } from '../projects/constants';

export default function ProjectsPage({ location }) {
  return (
    <Layout title="Projects" location={location}>
      <Container>
        <ProjectsList>
          {PROJECTS.map(({ name, description, url, domain }) => (
            <ProjectsItem key={name}>
              <ProjectsLink href={url}>
                <ProjectsHeading>{name}</ProjectsHeading>
                <ProjectsDescription>{description}</ProjectsDescription>
                <ProjectsAction>Visit {domain}</ProjectsAction>
              </ProjectsLink>
            </ProjectsItem>
          ))}
        </ProjectsList>
      </Container>
    </Layout>
  );
}

import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { List, Item, Link, Heading, Description, Action } from './styled';

const isUrl = string =>
  string.slice(0, 7) === 'http://' || string.slice(0, 8) === 'https://';

export default function CardGrid({ items }) {
  return (
    <List>
      {items.map(({ name, description, url, action }) => (
        <Item key={url}>
          <Link
            as={isUrl(url) ? 'a' : GatsbyLink}
            href={isUrl(url) ? url : undefined}
            to={!isUrl(url) ? url : undefined}
          >
            <Heading>{name}</Heading>
            <Description>{description}</Description>
            <Action>{action}</Action>
          </Link>
        </Item>
      ))}
    </List>
  );
}

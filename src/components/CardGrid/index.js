import React from 'react';
import { List, Item, Link, Heading, Description, Action } from './styled';

export default function CardGrid({ items }) {
  return (
    <List>
      {items.map(({ name, description, url, action }) => (
        <Item key={url}>
          <Link href={url}>
            <Heading>{name}</Heading>
            <Description>{description}</Description>
            <Action>{action}</Action>
          </Link>
        </Item>
      ))}
    </List>
  );
}

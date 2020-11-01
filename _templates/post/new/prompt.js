module.exports = [
  {
    type: 'input',
    name: 'slug',
    message: 'Slug (dash-case)',
    initial: '_new-post',
  },
  {
    type: 'input',
    name: 'title',
    message: 'Title',
    initial: 'PLACEHOLDER',
  },
  {
    type: 'input',
    name: 'tagline',
    message: 'Tagline',
    initial: 'PLACEHOLDER',
  },
  {
    type: 'input',
    name: 'tags',
    message: 'Tags (comma, separated)',
    initial: 'PLACEHOLDER',
  },
];

const mdxFeed = require('gatsby-mdx/feed');

module.exports = {
  // Metadata required by `gatsby-plugin-feed`
  siteMetadata: {
    title: 'Sunny Singh',
    description: 'Web Developer / Creator',
    siteUrl: `https://sunnysingh.io`,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: `${__dirname}/src`,
        assets: `${__dirname}/src/assets`,
        components: `${__dirname}/src/components`,
        config: `${__dirname}/src/config`,
        pages: `${__dirname}/src/pages`,
        utils: `${__dirname}/src/utils`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: mdxFeed,
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'sunnysingh.io',
        short_name: 'sunny',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#1c1c22',
        display: 'minimal-ui',
        icon: 'src/assets/logo-square.png',
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/BlogPostTemplate.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              showCaptions: true,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
  ],
};

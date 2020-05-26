module.exports = {
  siteMetadata: {
    title: 'Sunny Singh',
    description: 'Creating Content & Code',
    siteUrl: `https://sunnysingh.io`,
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        trackingUrl: process.env.FATHOM_DOMAIN,
        siteId: process.env.FATHOM_SITE_ID,
        whitelistHostnames: ['sunnysingh.io', 'www.sunnysingh.io'],
        embedVersion: 'v2',
      },
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
        icon: './src/assets/logo-square.png',
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-mdx',
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

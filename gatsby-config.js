module.exports = {
  siteMetadata: {
    title: 'Gatsby LUT',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-remark'
  ],
}

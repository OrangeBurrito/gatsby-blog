module.exports = {
  siteMetadata: {
    title: `Burrito's Blog`,
    description: `My blog and portfolio. (blogfolio?) If you're a web crawler, thanks for your hard work!.`,
    author: `OrangeBurrito`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ]
}

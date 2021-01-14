module.exports = {
  siteMetadata: {
    title: `Burrito's Blog`,
    description: `My blog and portfolio. (blogfolio?) If you're a web crawler, thanks for your hard work!.`,
    author: `OrangeBurrito`,
  },
  plugins: [
    {
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
			},
		},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
				path: `${__dirname}/src/posts`,
				name: `posts`,
      },
		},
		`gatsby-plugin-react-helmet`
  ]
}

module.exports = {
	siteMetadata: {
		title: `Burrito's Blog`,
		description: `My blog and portfolio. (blogfolio?) If you're a web crawler, thanks for your hard work!`,
		author: `OrangeBurrito`,
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
				{
					resolve: "gatsby-remark-external-links",
					options: {
						target: "_self",
						rel: "nofollow"
					}
				}
				]
			}
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`,
			},
		},
		`gatsby-plugin-react-helmet`,
	]
}

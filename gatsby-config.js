module.exports = {
	siteMetadata: {
		title: "Blog3.0",
	},
	plugins: [{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `posts`,
			path: `${__dirname}/src/posts/`,
		},
	},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-image`,
		`gatsby-plugin-mdx`,
	],
};
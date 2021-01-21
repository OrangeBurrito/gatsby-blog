const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve('src/templates/blogpost.js')

	// (sort: {fields: [frontmatter___date], order: DESC})
	return graphql(`
	{
		allMdx {
			nodes {
				fields {
					slug
				}
				frontmatter {
					title
				}
			}
		}
	}
	`).then(result => {
		if (result.errors) {
			throw result.errors
		}

		const posts = result.data.allMdx.nodes

		posts.forEach((post, index) => {

	// 		const previous = index === posts.length - 1 ? null : posts[index + 1];
	// const next = index === 0 ? null : posts[index - 1];
	
			const	previous = index === 0 ? null : posts[index - 1]
			const next = index === posts.length - 1 ? null : posts[index + 1]

			createPage({
				path: post.fields.slug,
				component: blogPostTemplate,
				context: {
					slug: post.fields.slug,
					previous,
					next,
				}
			})
		})
	})
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      coverImage: File @link(from: "coverImage___NODE")
    }
    type Frontmatter {
      title: String!
      coverImage: String
    }
  `)
}

exports.onCreateNode = async ({ node, actions, getNode, store, cache, createNodeId}) => {
	const { createNodeField, createNode } = actions;
	if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}

	if (
    node.internal.type === "Mdx" &&
    node.frontmatter.coverImage !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.coverImage, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    })
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.coverImage___NODE = fileNode.id
    }
  }
}
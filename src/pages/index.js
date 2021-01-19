import React from 'react'
import {Link, graphql} from 'gatsby'

import Layout from "../components/layout"

export default function IndexPage({data}) {
	return (
		<Layout title="Home">
			<div class="index-wrap">
				<h1 className="bold-h1">OrangeBurrito's Blog</h1>

				<div className="posts-aside">
				{data.allMdx.nodes.map(({id, excerpt, frontmatter, fields }) => (
					// <div key={id}>
						<Link to={fields.slug}>
							<h1>{frontmatter.title}</h1>
							<p>{frontmatter.date}</p>
							<p>{excerpt}</p>
						</Link>
					// </div>
				))}
				</div>

			</div>
		</Layout>
	)
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date(formatString: "MMMM Do YYYY")
				}
				fields {
					slug
				}
      }
    }
  }
`;
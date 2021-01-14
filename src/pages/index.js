import React from 'react'
import {Link, graphql} from 'gatsby'

import Layout from "../components/layout"

export default function IndexPage({data}) {
	return (
		<Layout title="Home">
			<img src="https://source.unsplash.com/random/400x300" alt="" />
			{data.allMdx.nodes.map(({id, excerpt, frontmatter, fields }) => (
				<div key={id}>
					<Link to={fields.slug}>
						<h1>{frontmatter.title}</h1>
						<p>{frontmatter.date}</p>
						<p>{excerpt}</p>
					</Link>
				</div>
			))}
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
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
				}
				fields {
					slug
				}
      }
    }
  }
`;
import React from 'react'
import {Link, graphql} from 'gatsby'

import Layout from "../components/layout"

export default function IndexPage({data}) {
	return (
		<Layout title="Home">
			<div className="index-wrap">
				<h1 className="bold-h1">OrangeBurrito's Blog</h1>

				<div className="posts-aside">
				{data.allMdx.nodes.map(({id, excerpt, frontmatter, fields }) => (
					<Link to={fields.slug} className="post-card box">
						<img src={frontmatter.cover} alt={frontmatter.coverAlt}></img>
						<h1>{frontmatter.title}</h1>
						<p className="post-date">{frontmatter.date}</p>
						<p>{excerpt}</p>
						<p className="read-more">Read More
							<svg height="10" width="8" viewBox="0 0 34 58">
								<path d="M9.82 1.583c2.09 2.04 22.51 23.48 22.51 23.48a5.484 5.484 0 0 1 1.67 3.94c0 1.42-.56 2.85-1.67 3.94 0 0-20.42 21.44-22.51 23.47-2.09 2.04-5.85 2.18-8.08 0-2.23-2.17-2.41-5.21 0-7.87l18.74-19.54L1.74 9.463c-2.41-2.67-2.23-5.71 0-7.88 2.23-2.18 5.99-2.04 8.08 0" fill="#ebcb8b"/>
							</svg>
						</p>
					</Link>
				))}
				</div>

			</div>
		</Layout>
	)
}

export const query = graphql`
query SITE_INDEX_QUERY {
  allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
    nodes {
      id
      excerpt(pruneLength: 100)
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
				cover
        coverAlt
      }
      fields {
        slug
      }
    }
  }
}
`;
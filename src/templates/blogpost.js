import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Dump from '../components/Dump'
import Layout from '../components/layout'

export const query = graphql`
query PostBySlug($slug: String!) {
  mdx(fields: { slug: { eq: $slug } }) {
		body
    frontmatter {
      title
      date(formatString: "MMMM Do YYYY")
    }
  }
}
`

export default ({ data, pageContext }) => {
	const { frontmatter, body } = data.mdx
	const { previous, next } = pageContext
	return (
		<Layout title={frontmatter.title}>
			<div className="blogpost-wrap">
				<div className="blogpost-header">
					<div className="blogpost-title">
						<h1 className="post-title">{frontmatter.title}</h1>
						<p style={{ fontFamily: 'Fira Code' }}>{frontmatter.date}</p>
					</div>
					<div className="post-navigation">
					{previous === false ? null : (
						<>
							{previous && (
								<Link to={previous.fields.slug} className="box">
									<h3>Previous</h3>
									<h2>{previous.frontmatter.title}</h2>
								</Link>
							)}
						</>
					)}
					{next === false ? null : (
						<>
							{next && (
								<Link to={next.fields.slug} className="box">
									<h3>Next</h3>
									<h2>{next.frontmatter.title}</h2>
								</Link>
							)}
						</>
					)}
					</div>
				</div>

				<MDXRenderer>{body}</MDXRenderer>
			</div>
		</Layout>
	)
}
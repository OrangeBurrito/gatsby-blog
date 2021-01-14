import React from 'react'
import {Link, graphql} from 'gatsby'

import Layout from "../components/layout"
import {useSiteMetadata} from '../hooks/useSiteMetadata'

export const query = graphql`
query indexQuery {
  allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
    nodes {
      id
      excerpt(pruneLength: 150)
      frontmatter {
        title
        date
      }
    }
  }
}
`


export default function IndexPage({data}) {
	const {title, description} = useSiteMetadata()
	return (
		<Layout title="Home">
			<pre>index.js</pre>
			<img src="https://source.unsplash.com/random/400x300" alt="" />

			{data.allMdx.nodes.map(({excerpt, frontmatter}) => (
				<Link to="">
					<h1>{frontmatter.title}</h1>
					<pre>{frontmatter.date}</pre>
					<p>{excerpt}</p>
				</Link>
			))}
			
		</Layout>
	)
}
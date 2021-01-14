import React from "react"
import {Link} from 'gatsby'

import Header from '../components/header'
import Layout from "../components/layout"

export default function IndexPage() {
	return (
		<Layout title="Home">
			<pre>index.js</pre>
			<img src="https://source.unsplash.com/random/400x300" alt="" />
		</Layout>
	)
}

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )
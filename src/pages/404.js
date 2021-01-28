import React from "react"
import {Link} from 'gatsby'
import {Helmet} from 'react-helmet'

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout title="404 Not Found" headerStyle={{fontFamily: 'Fira Code'}}>
		<Helmet>
				<title>404 Not Found</title>
			</Helmet>
		<div className="about-wrap">
			<h1 className="notfound">404 Not Found <span>🗿</span></h1>
			<Link to="/" className="notfound-a">Back to the homepage</Link>
			{/* <p>Where am I? Help!</p> */}
		</div>
  </Layout>
)

export default NotFoundPage

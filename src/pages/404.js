import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout title="404 Not Found">
		<div className="about-wrap">
			<h1 className="bold-h1" style={{color: '#FB9489'}}>404 Not Found?!</h1>
			<Link to="/">Back to safety</Link>
			{/* <p>Where am I? Help!</p> */}
		</div>
  </Layout>
)

export default NotFoundPage

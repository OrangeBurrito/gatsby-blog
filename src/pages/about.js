import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/layout'

export default function About() {
  return (
    <Layout title="About">
			<Helmet>
				<title>OrangeBurrito | About</title>
			</Helmet>
			<div className="about-wrap">
				<h2 className="bold-h1">Blog Creator</h2>
				<a href='https://github.com/OrangeBurrito' style={{fontSize: '2rem'}}>OrangeBurrito</a>
			</div>
      
    </Layout>
  )
}
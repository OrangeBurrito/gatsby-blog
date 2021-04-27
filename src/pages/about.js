import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/layout'
import HoverImage from '../components/imageOnHover'

export default function About() {
  return (
    <Layout title="About">
			<Helmet>
				<title>OrangeBurrito | About</title>
			</Helmet>
			<div className="about-wrap">
				<h2>Blog Creator</h2>
				<a href='https://github.com/OrangeBurrito' style={{fontSize: '2rem'}} target="_blank">OrangeBurrito</a>
				{/* <p>In the fierce and ongoing debate concerning whales, I myself prefer <HoverImage src="https://cosmosmagazine.com/wp-content/uploads/2019/12/080217_whalehearing_1.jpg">baleen</HoverImage> to blue.</p> */}
			</div>
      
    </Layout>
  )
}
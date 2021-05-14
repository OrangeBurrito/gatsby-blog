import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'

import '../style.css'

const HomePage = () => {
	return (
		<div class="wrap">
			<div class="hero">
				<div class="header box-no-padding">
					<div class="header-text">
						<h1>The Website</h1>
						<div>the caption</div>
						<div class="icons">
						<li>🗿</li>
							<li>🥠</li>
							<li>💾</li>
						</div>
					</div>
					<div class="header-img"></div>
				</div>
				<div class="description box">
					<pre>➜ <span> ~</span> whoami<br />orangeburrito
					</pre>
					<Link to="../pages/gatsbydefault">gatsbydefault.js</Link>
					{/* <a href="./gatsby/default">gatsbydefault.js</a> */}
				</div>
			</div>
			<div class="blog">
				<div class="header box">
					<h1>Blog</h1>
				</div>
				<div class="posts box">
					<div class="posts-header">
						<h2>newest blogposts</h2>
						<button>Sort</button>
					</div>
					<div class="post-card-wrap">
						<div class="post-card">
							<h2>sand-based sandwiches</h2>
							<div class="img-wrap">
								<img src="https://i.imgur.com/C8DKgEi.jpg"></img>
							</div>
						</div>
						<div class="post-card">
							<h2>suspicious quiches</h2>
							<div class="img-wrap">
								<img src="https://smackeralofsomething.files.wordpress.com/2011/06/paul-quiche.jpg"></img>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="projects box">
				<h2>Projects</h2>
			</div>
			<div class="artwork box">
				<h2>Fine Art</h2>
				<StaticImage src="../images/longpath.png" alt="arcade mode from moving out"/>
			</div>
		</div>
	)
}

export default HomePage
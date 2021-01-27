import React from 'react'

import Header from '../components/header'

export default function Layout(props) {
	return (
		<div className="wrap">
			<Header headerText={props.title} headerStyle={props.headerStyle}/>
			<main>{props.children}</main>
			<footer className="box" style={props.footerStyle}>Copyright © OrangeBurrito {new Date().getFullYear()}</footer>
		</div>
	)
}

{/* <p align="center">
  <a href="orangeburrito.com/ g">
    <img alt="Paper with a blue pin attached to it" src="https://64.media.tumblr.com/361830e653b4ddcbf7b0a28c649a0a41/tumblr_pwtpbtqnKN1tsxrbyo1_400.png" width="60"/>
  </a>
</p>
<h1 align="center">
  OrangeBurrito's Blog
</h1>

This is my blog site repo. (still a work-in-progress)
I write about whatever comes to mind

[_Visit my blog here!_](orangeburrito.com/blog) */}
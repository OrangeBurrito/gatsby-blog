import React from 'react'
import {Link} from 'gatsby'

export default (props) => {
	return (
		<div className="header">
			<h1 className="box">{props.headerText}</h1>
			<nav className="box">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</nav>
		</div>
	)
}
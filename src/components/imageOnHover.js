import React from 'react'

export default function HoverImage({children, src, alt, imgClass}) {
	return <span className="hover-span">{children}<img className={`hover-image ${imgClass}`} src={src} alt={alt}/></span>
}
import React, { Component } from 'react'
import Photo from './Photo'

class PhotoGrid extends Component {
	render() {
		const { posts } = this.props
		return (
			<div>
				<pre>
					{posts.map((post, i) => <Photo key={i} i={i} post={post} {...this.props}/>)}
				</pre>
			</div>
		)
	}
}
export default PhotoGrid

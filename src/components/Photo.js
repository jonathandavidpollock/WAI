import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Photo extends Component {
	render() {
		const { post, comments, increment, i } = this.props
		return (
			<figure>
				<Link to={`/view/${post.code}`} >
					<img src={post.display_src} alt={post.caption} width="200" height="200"/>
				</Link>
				<figcaption>
					<p> {post.caption} </p>
					<button onClick={()=> increment(i)}> &hearts; {post.likes} </button>
					<p>{comments[post.code] ? comments[post.code].length : 0}</p>
				</figcaption>
			</figure>
		);
	}
}

export default Photo

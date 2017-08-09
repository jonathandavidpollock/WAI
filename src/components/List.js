import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
	render() {
		const { post, comments, increment, i } = this.props
		return (
			<div className="item">
				<Link to={`/view/${post.code}`} >
					<p> {post.caption} </p>
				</Link>
			</div>
		);
	}
}
/*
<button onClick={()=> increment(i)}> &hearts; {post.likes} </button>
<p>{comments[post.code] ? comments[post.code].length : 0}</p>
*/
export default List

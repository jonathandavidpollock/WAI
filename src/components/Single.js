import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
	render() {
		const {posts, comments} = this.props // deconstruce out of props
		const {postId} = this.props.match.params // deconstruce route params

		const i = posts.findIndex((post) => post.code === postId)
		const post = posts[i]
		const postComments = comments[postId] || []

		console.log(post)
		return (
			<div>
				<p><span role="img" aria-label="person">💁</span> I'm the Single Photo</p>
				<Photo i={i} post={post} {...this.props}/>
				<Comments postComments={postComments} {...this.props}/>
			</div>
		)
	}
}
 export default Single

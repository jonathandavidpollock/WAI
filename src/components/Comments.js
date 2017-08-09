import React, { Component } from 'react';

class Comments extends Component {

  constructor() {
    super();
    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	renderComment(comment, i) {
		return (
			<div key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button>&times;</button>
				</p>
			</div>
		)
	}

	handleSubmit(e) {
		e.preventDefault()
		const {postId} = this.props.match.params // deconstruce route params
		const author = this.refs.author.value
		const comment = this.refs.comment.value
		// console.log('hey', postId, author, comment)
		this.props.addComment(postId, author, comment)
	}

	render() {
		const {postComments} = this.props
		return (
			<div>
				<h4>Comments:</h4>
				{postComments.map(this.renderComment)}

				<form ref="commentForm" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author"/>
					<input type="text" ref="comment" placeholder="comment"/>
					<input type="submit" hidden/>
				</form>
			</div>

		);
	}
}

export default Comments

import React, { Component } from 'react';

class Comments extends Component {

  constructor() {
    super();
    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	renderComment(comment, i) {
    const {postId} = this.props.match.params
		return (
			<div key={i}>
				<p>
					{comment.text}
					<button onClick={this.props.removeComment.bind(null, postId, i)}>&times;</button>
				</p>
			</div>
		)
	}

	handleSubmit(e) {
		e.preventDefault()
		const {postId} = this.props.match.params // deconstruct route params
		const comment = this.refs.comment.value
		this.props.addComment(postId,comment)
	}

	render() {
		const {postComments} = this.props
		return (
			<div>
				<h4>To Dos:</h4>
        <div className="todo">
          {postComments.map(this.renderComment)}
        </div>
				<form ref="commentForm" onSubmit={this.handleSubmit}>
					<input type="text" ref="comment" placeholder="Add a to-do"/>
					<input type="submit" hidden/>
				</form>
			</div>

		);
	}
}

export default Comments

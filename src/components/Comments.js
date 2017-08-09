import React, { Component } from 'react';
import ContentEditable from "react-contenteditable";

class Comments extends Component {

  constructor() {
    super();
    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const i = this.refs.keys.innerHTML
    const {postId} = this.props.match.params // deconstruct route params
    const comment = e.target.innerHTML
    this.props.updateComment(i, comment, postId)
  }

	renderComment(comment, i) {
    const {postId} = this.props.match.params
		return (
			<div key={i}>
				<p>
          <div hidden ref="keys">{i}</div>
          <ContentEditable
                html={comment.text}
                index={i}
                disabled={false}
                onBlur={this.handleChange.bind()}
                ref="txt"

          />
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
    this.refs.commentForm.reset;
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

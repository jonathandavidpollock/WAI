import React, { Component } from 'react';
import ContentEditable from "react-contenteditable";

class Comments extends Component {

  constructor() {
    super();
    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
    console.log("----> Changed");
    const {postId} = this.props.match.params // deconstruct route params
    const comment = this.refs.txt.value
    this.props.updateComment(postId, comment)
  }

	renderComment(comment, i) {
    const {postId} = this.props.match.params
		return (
			<div key={i}>
				<p>
          <ContentEditable
                html={comment.text}
                disabled={false}
                onBlur={this.handleChange}
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
    this.ref.commentForm.reset;
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

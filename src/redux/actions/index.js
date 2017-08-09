// increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment
export function addComment(comment) {
	return {
		type: 'ADD_COMMENT',
		comment
	}
}

// remove comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}

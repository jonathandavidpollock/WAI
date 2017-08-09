// increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment
export function addComment(postId, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
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

export function updateComment(postId, i) {
	return {
		type: 'UPDATE_COMMENT',
		postId,
		i
	}
}

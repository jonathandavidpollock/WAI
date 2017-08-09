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

export function updateComment(i, comment, postId) {
	console.log("__________ Game Of THRONEs");
	return {
		type: 'UPDATE_COMMENT',
		i,
		comment,
		postId
	}
}

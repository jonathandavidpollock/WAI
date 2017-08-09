function comments(state=[], action) {
	switch (action.type) {
		case 'ADD_COMMENT' :
			return [
				...state, {
					comment: action.comment
				}
			]

		case 'REMOVE_COMMENT':
			console.log("Attempting to Remove comment");
			console.log(typeof state);
			console.log(state);
			console.log(`-------> Post Id ${action.postId}`);
			const copiedState = Object.assign({}, state);
			console.log("--------------");
			console.log(typeof copiedState);
			console.log(copiedState);
			console.log("--------------");
			return {
					...copiedState.slice(0, action.postId), // before what we are updating
					...copiedState.slice(action.postId + 1) // after the deleted one
			}

		default:
			return state;
	}
	return state
}

export default comments

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
			const postId = action.postId
			const i = action.i
			console.log(state[postId][i]);
			const items = {...state};
    	delete items[postId][i];

			return items

		default:
			return state;
	}
	return state
}

export default comments

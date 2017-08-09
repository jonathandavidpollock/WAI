function comments(state=[], action) {
	switch (action.type) {
		case 'ADD_COMMENT' :
		return [
			...state, {
				author: action.author,
				comment: action.comment
			}
		]

		case 'REMOVE_COMMENT':
			return [
				{
					// ...state.slice(0,i), // before what we are updating
					// {...state[i], likes: state[i].likes + 1},
					// ...state.slice(i+1),// after what we are updating
				}
			]
			default:
				return state;
		return state
	}
}

export default comments

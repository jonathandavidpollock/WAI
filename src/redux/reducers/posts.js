function posts(state=[], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			const i = action.index;
			console.log(state[i].likes)
			return [
				...state.slice(0,i), // before what we are updating
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i+1),// after what we are updating
			]
		default:
			return state;
	}

}

export default posts

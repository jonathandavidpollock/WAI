function postComments(state=[], action) {
	switch (action.type) {
		case 'ADD_COMMENT' :
			return [...state,{
        text: action.comment
      }];

		case 'REMOVE_COMMENT':
			return [
				// Spread and skip over the comment
				...state.slice(0,action.i),
				...state.slice(action.i + 1)
			];
		case 'UPDATE_COMMENT':
		 console.log("-------------");
		 console.log("Wes is Bos");
			console.log(state[action.i]);
			console.log("Comment:", action.comment);
			return [
				...state.slice(0, action.i),
				{text:action.comment},
				...state.slice(action.i + 1)
			]

		default:
			return state;
	}
}

function comments(state = [], action) {
	console.log("----------- I am HERE");
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments

export const posts = (state=[],action) => {
    switch(action.type){
        case 'ADD_POST':
            return [
                action.postData,
                ...state
            ]
        case 'INCREMENT_LIKES': 
            return state.map(post => {
                if(post.id === action.id)
                    post.likes += 1;
                return post;
            })
        default: 
            return state;
    }
}
const initialState = ['/uaxuco.gif','/2AuX.gif']

export const comments = (state = {},action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            let obj = {};
            obj[action.id] = state[action.id] ? [...state[action.id],action.commentText] : [action.commentText];
            return Object.assign({},state, obj);
        default: 
            return state;
    }
}
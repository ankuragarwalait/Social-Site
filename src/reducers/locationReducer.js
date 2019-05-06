export const location = (state = null,action) => {
    switch(action.type){
        case 'ADD_LOCATION':
            return action.location;
        case 'ADD_POST':
            return null;
        default: 
            return state;
    }
}
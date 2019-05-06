let counter = 0;

export const addPost = (postValue, location) => {
    return {
        type: 'ADD_POST',
        postData: {
            id: ++counter,
            postValue,
            timeStamp: new Date().toUTCString(),
            location: location,
            likes: 0
        }
    }
}

export const addLocation = (locationData) => {
    return {
        type: 'ADD_LOCATION',
        location: locationData
    }
}

export const incrementLikes = (id) => {
    return {
        type: 'INCREMENT_LIKES',
        id
    }
}

export const addComment = (commentText, id) => {
    return {
        type: 'ADD_COMMENT',
        commentText,
        id
    }
}
import {ActionsTypes, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state
        case 'UPDATE_NEW_TEXT':
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: "ADD_POST"
    } as const
}
export const updateNewTextAC = (postText: string) => {
    return {
        type: "UPDATE_NEW_TEXT",
        newText: postText
    } as const
}

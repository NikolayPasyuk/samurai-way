export type PotsType = {
    id: number
    message: string
    likesCount: number
}

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ],
    newPostText: 'it-kamasutra.com'
}

type InitialStateType = {
    posts: Array<PotsType>
    newPostText: string
}

type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewTextAC>

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                }],
                newPostText: ''
            }
        case 'UPDATE_NEW_TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD_POST'
    } as const
}
export const updateNewTextAC = (postText: string) => {
    return {
        type: 'UPDATE_NEW_TEXT',
        newText: postText
    } as const
}

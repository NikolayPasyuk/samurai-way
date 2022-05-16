import {AppActionsTypes, AppThunk} from './redux-store';
import {profileAPI, ProfileType, userAPI} from '../api/api';

export type PostType = {
    id: number
    message: string
    likesCount: number
}


const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ] as Array<PostType>,
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: null,
            vk: '',
            twitter: '',
            instagram: '',
            youtube: null,
            github: '',
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0 ,
        photos: {
            small: '',
            large: ''
        }
    } as ProfileType,
    status: ''
}

export type InitialStateType = typeof initialState

export type ProfileActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export const profileReducer = (state: InitialStateType = initialState, action: AppActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'ADD_POST': {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.newPostText,
                    likesCount: 0
                }]
            }
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD_POST',
        newPostText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: 'SET_STATUS',
        status
    } as const
}

export const getUserProfile = (userId: number): AppThunk => (dispatch) => {
    userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId: number): AppThunk => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string): AppThunk => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}


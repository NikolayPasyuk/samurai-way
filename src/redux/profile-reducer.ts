import {AppActionsTypes, AppThunk} from './redux-store';
import {Dispatch} from 'redux';
import {userAPI} from '../api/api';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
}

export type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ] as Array<PostType>,
    newPostText: 'it-kamasutra.com',
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
        userId: 0,
        photos: {
            small: '',
            large: ''
        }
    } as ProfileType
}

export type InitialStateType = typeof initialState

export type ProfileActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewTextAC>
    | ReturnType<typeof setUserProfile>

export const profileReducer = (state: InitialStateType = initialState, action: AppActionsTypes): InitialStateType => {

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
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
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
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    } as const
}

export const getUserProfile = (userId: string): AppThunk => (dispatch) => {
    userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const updateNewTextAC = (postText: string) => {
    return {
        type: 'UPDATE_NEW_TEXT',
        newText: postText
    } as const
}

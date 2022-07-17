import {AppThunk} from './redux-store';
import {profileAPI, userAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileContacts = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: string | null
    twitter: string | null
    vk: string | null
    website: string | null
    youtube: string | null
}

export type ProfileType = {
    aboutMe: string | null
    contacts: ProfileContacts
    fullName: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    photos: PhotosType
    userId: number
}

type ProfileStateType = {
    posts: Array<PostsType>
    profile: ProfileType | null
    isOwner: boolean
    status: string
}

let initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post.', likesCount: 20},
        {id: 2, message: 'Hello, welcome!', likesCount: 15},
    ],
    profile: null,
    isOwner: false,
    status: '',
}

export type ProfileActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setPhotoSuccess>

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsTypes): ProfileStateType => {

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
        case 'DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            }
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: {...state.profile!, photos: action.photos},
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
export const setUserProfile = (profile: null | ProfileType) => {
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
export const deletePost = (postId: number) => {
    return {
        type: 'DELETE_POST',
        postId
    } as const
}
export const setPhotoSuccess = (photos: { small: string, large: string }) =>
    ({type: 'SAVE_PHOTO_SUCCESS', photos} as const)

export const getUserProfile = (userId: number): AppThunk => async (dispatch) => {
    try {
        const response = await userAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    } catch (error) {
        console.log(`Error getting user profile. ${error}`);
    }
}
export const getStatus = (userId: number): AppThunk => async (dispatch) => {
    try {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    } catch (error) {
        console.log(`Error getting status. ${error}`);
    }
}
export const updateStatus = (status: string): AppThunk => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        console.log(`Error updating status. ${error}`);
    }
}
export const savePhoto = (photoFile: File): AppThunk => async (dispatch) => {
    try {
        const response = await profileAPI.savePhoto(photoFile);
        if (response.resultCode === 0) {
            dispatch(setPhotoSuccess(response.data.photos));
        }
    } catch (error) {
        console.log(`Error save avatar. ${error}`);
    }
};

export const saveProfile = (profile: ProfileType): AppThunk => {
    return async (dispatch, getState: () => any) => {
        try {
            const userId = getState().auth.userId;
            const response = await profileAPI.saveProfile(profile);
            if (response.resultCode === 0 && userId) {
                await dispatch(getUserProfile(userId));
            } else {
                let listOfSitesWithErrors = response.messages.map((el: string) => {
                    return (el.toLowerCase()).match(/(?<=>)\D+[^)]/ig)![0];
                })
                listOfSitesWithErrors = listOfSitesWithErrors.join(', ');
                if (response.messages.length === 1) {
                    dispatch(stopSubmit('edit-profile',
                        {_error: `Invalid url format in ${listOfSitesWithErrors} input`}));
                } else {
                    dispatch(stopSubmit('edit-profile',
                        {_error: `Invalid url format in inputs: ${listOfSitesWithErrors}`}));
                }
                return Promise.reject(response.messages);
            }
        } catch (error) {
            console.log(`Error saving profile information. ${error}`);
        }
    };
}
import {AppThunk} from './redux-store';
import {authAPI, profileAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

export type AuthActionsTypes =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setProfileSmallPhotoSuccess>
    | ReturnType<typeof getCaptchaUrlSuccess>

type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
    profileSmallPhoto: string | null
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    profileSmallPhoto: null,
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsTypes)
    : AuthStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
        case 'SET_PROFILE_SMALL_PHOTO':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {userId, email, login, isAuth}
    } as const
}
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: 'GET_CAPTCHA_URL_SUCCESS',
    payload: {captchaUrl},
} as const);
export const setProfileSmallPhotoSuccess = (profileSmallPhoto: string | null) => ({
    type: 'SET_PROFILE_SMALL_PHOTO',
    payload: {profileSmallPhoto},
} as const);

export const getAuthUserData = (): AppThunk => async (dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const setProfileSmallPhoto = (userId: number | null): AppThunk => {
    return async (dispatch) => {
        try {
            if (userId) {
                const response = await profileAPI.getProfileSmallPhoto(userId);
                dispatch(setProfileSmallPhotoSuccess(response));
            }
        } catch (error) {
            console.log(`Error setting profile small photo. ${error}`);
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            await dispatch(getCaptchaUrl());
        } else {
            const message = response.data.messages.length > 0 ? response.data.messages[0]
                : 'Some error'
            dispatch(stopSubmit('login', {email: message}))
        }
    }
}
export const getCaptchaUrl = (): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await securityAPI.getCaptchaUrl();
            const captchaUrl = response.url;
            dispatch(getCaptchaUrlSuccess(captchaUrl));
        } catch (error) {
            console.log(`Error getting captcha image url. ${error}`);
        }
    }
}
export const logout = (): AppThunk => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, '', '', false))
    }
}
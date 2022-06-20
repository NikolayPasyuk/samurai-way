import {AppActionsTypes, AppThunk} from './redux-store';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

export type InitialStateType = typeof initialState
export type AuthActionsTypes =
    ReturnType<typeof setAuthUserData>

const initialState = {
    userId: null,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: AppActionsTypes)
    : InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return <InitialStateType>{
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

export const getAuthUserData = (): AppThunk => async (dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0]
            : 'Some error'
        dispatch(stopSubmit('login', {email: message}))
    }
}

export const logout = (): AppThunk => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, '', '', false))
    }
}
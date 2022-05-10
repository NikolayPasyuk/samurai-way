import {AppActionsTypes, AppThunk} from './redux-store';
import {authAPI} from '../api/api';

export type InitialStateType = typeof initialState

export type AuthActionsTypes =
    ReturnType<typeof setAuthUserData>

const initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: AppActionsTypes)
    : InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {userId, email, login, isAuth}
    } as const
}

export const getAuthUserData = (): AppThunk => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(0, '', '', false))
            }
        })
}
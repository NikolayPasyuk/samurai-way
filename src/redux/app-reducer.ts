import {AppThunk} from './redux-store';
import {getAuthUserData} from './auth-reducer';

export type InitialStateType = typeof initialState
export type AppInitializedActionsTypes =
    ReturnType<typeof initializedSuccess>

const initialState = {
    initialized: false,
}

export const appReducer = (state: InitialStateType = initialState, action: AppInitializedActionsTypes)
    : InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED_SUCCESS',
    } as const
}

export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


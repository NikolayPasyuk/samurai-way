export type InitialStateType = typeof initialState

type ActionsTypes =
    ReturnType<typeof setAuthUserData>

const initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes)
    : InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        data: {userId, email, login}
    } as const
}


import {AppActionsTypes} from './redux-store';

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

const initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hi Nick'},
        {id: 5, message: 'How are you?'},
    ] as Array<MessagesType>,
    dialogs: [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Pavel'},
        {id: 4, name: 'Macks'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Andrey'},
    ] as Array<DialogsType>
}

export type InitialStateType = typeof initialState
export type DialogsActionsTypes = ReturnType<typeof sendMessageAC>

export const dialogsReducer = (state: InitialStateType = initialState, action: AppActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SEND_MESSAGE':
            const body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'SEND_MESSAGE',
        newMessageBody
    } as const
}


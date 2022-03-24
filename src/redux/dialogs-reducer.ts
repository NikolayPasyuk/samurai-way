import {ActionsTypes} from './store';

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}


const initialState:InitialStateType = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hi Nick'},
        {id: 5, message: 'How are you?'},
    ],
    dialogs: [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Pavel'},
        {id: 4, name: 'Macks'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Andrey'},
    ],
    newMessageBody: ''
}

type InitialStateType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            state.newMessageBody = action.body
            return state
        case 'SEND_MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
}
export const updateNewMessageBodyAC = (postText: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: postText
    } as const
}

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}


const initialState: InitialStateType = {
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

type ActionsTypes = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageBodyAC>

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {
                ...state,
                newMessageBody: action.body
            }
        case 'SEND_MESSAGE':
            const body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
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

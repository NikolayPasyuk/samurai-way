import {ActionsTypes, DialogsPageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            state.newMessageBody = action.body
            return state
        case "SEND_MESSAGE":
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
        type: "SEND_MESSAGE"
    } as const
}
export const updateNewMessageBodyAC = (postText: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY",
        body: postText
    } as const
}

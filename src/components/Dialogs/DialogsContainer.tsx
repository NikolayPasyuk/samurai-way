import React from 'react';
import {StoreType} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


type DialogsPropsType = {
    store: StoreType
}


function DialogsContainer(props: DialogsPropsType) {
    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    onSendMessage={onSendMessageClick}
                    dialogsPage={state}
    />
};

export default DialogsContainer;
import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {

                const state = store.getState().dialogsPage

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }

                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body))
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                onSendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;
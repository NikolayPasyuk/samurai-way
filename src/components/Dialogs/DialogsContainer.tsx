import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import Dialogs, {DialogsPageType} from './Dialogs';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';


type mapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    onSendMessage: () => void
}

type mapStatePropsType = {
    dialogsPage: DialogsPageType
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        onSendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

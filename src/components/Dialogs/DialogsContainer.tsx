import React from 'react';
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type mapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    onSendMessage: () => void
}

type mapStatePropsType = {
    dialogsPage: DialogsPageType
}

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

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

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import AddMessageForm, {FormDataType} from './AddMessageForm/AddMessageForm';


function Dialogs(props: DialogsPropsType) {
    const state = props.dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    const addNewMessageChange = (values: FormDataType) => {
        props.onSendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessageChange}/>
        </div>
    );
}


export default Dialogs;
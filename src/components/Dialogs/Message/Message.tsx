import React from 'react';
import s from './Message.module.css'

type MessageType = {
    message: string
}

function Message(props: MessageType) {
    return (
        <div>
            <span className={s.message}>{props.message}</span>
        </div>
    )
}

export default Message;
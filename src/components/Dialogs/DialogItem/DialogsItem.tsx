import React from 'react';
import s from './DialogsItem.module.css'
import {NavLink} from 'react-router-dom';

type DialogsItemType = {
    name: string
    id: number
}

function DialogItem(props: DialogsItemType) {
    let path = '/dialogs/' + props.id;
    return (
        <NavLink className={s.dialog} to={path} activeClassName={s.active}>
            {props.name}
        </NavLink>
    )
}


export default DialogItem;
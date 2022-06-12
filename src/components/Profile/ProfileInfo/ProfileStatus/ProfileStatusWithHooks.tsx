import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {
                !editMode &&
                <div>
                    <span className={s.status} onDoubleClick={activateEditMode}>
                        {props.status || 'Status is not set'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        className={s.editStatus}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                    />
                </div>
            }
        </div>
    )
}


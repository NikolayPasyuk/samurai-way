import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileStatusPropsType = {}

export const ProfileStatus = (props: any) => {

    return (
        <>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status}/>
            </div>
        </>
    )
}


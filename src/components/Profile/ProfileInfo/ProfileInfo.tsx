import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';
import {ProfileType} from '../../../api/api';

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>
                <img
                    src="https://image.shutterstock.com/image-photo/aerial-view-nemiga-minsk-belarus-260nw-1282455937.jpg"
                    alt=""/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo


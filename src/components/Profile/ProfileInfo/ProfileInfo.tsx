import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileType} from '../../../api/api';
import AnonymousUserPhoto from '../../../assets/images/user.png'
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks';

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.userInfoSection}>
                <div className={s.userAvatarSection}>
                    <img
                        className={s.userAvatar}
                        src={props.profile.photos.large || AnonymousUserPhoto}
                        alt={props.profile.fullName + ' user avatar'}
                    />
                </div>
                <div className={s.editModeContainer}>
                    <div className={s.statusContainer}>
                        <ProfileStatusWithHooks status={props.status}
                                                updateStatus={props.updateStatus}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo


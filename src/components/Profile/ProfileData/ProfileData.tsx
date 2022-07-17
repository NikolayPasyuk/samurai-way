import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import Button from '../../common/Button/Button';
import {ProfileContacts, ProfileType} from '../../../redux/profile-reducer';

type ContactType = {
    contactTitle: string
    contactValue: string | null
}

const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contactText}>
        {contactTitle}: {contactValue}
    </div>
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    enableEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, enableEditMode}) => {
    return <div className={s.userDescription}>
        {isOwner && <div>
            <Button onClick={enableEditMode} className={s.button}>
                Edit info
            </Button>
        </div>}
        <div className={s.userName}>{profile.fullName ? profile.fullName : "information is absent"}</div>
        <div className={s.userInfoText}>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
        {profile.lookingForAJobDescription &&
            <div className={s.userInfoText}>Skills: {profile.lookingForAJobDescription}</div>}
        {profile.aboutMe && <div className={s.userInfoText}>About me: {profile.aboutMe}</div>}
        {
            !Object.keys(profile.contacts).map(key => {return profile.contacts[key as keyof ProfileContacts]})
                .every(el => el === null) &&
            <div>
                <span className={s.contactsSection}>Contacts: </span>
                {Object.keys(profile.contacts).map(key => {
                    return profile.contacts[key as keyof ProfileContacts]
                        ? <Contact key={key}
                                   contactTitle={key}
                                   contactValue={profile.contacts[key as keyof ProfileContacts]}/>
                        : null
                })}
            </div>
        }
    </div>
}

export default ProfileData;
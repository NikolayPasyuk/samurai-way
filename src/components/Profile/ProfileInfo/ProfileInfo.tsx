import React from "react";
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://image.shutterstock.com/image-photo/aerial-view-nemiga-minsk-belarus-260nw-1282455937.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo


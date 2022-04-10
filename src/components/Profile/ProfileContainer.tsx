import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

class ProfileContainer {
    render() {
        return (
            <div>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        )
    }
}

export default ProfileContainer


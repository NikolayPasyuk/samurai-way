import React from 'react';
import s from './Post.module.css';
import AnonymousUserPhoto from '../../../../assets/images/user.png';

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img src={AnonymousUserPhoto}
                     alt="user avatar"/>
            </div>
            <div className={s.textBlock}>
                <p className={s.userMessage}>{props.message}</p>
                <div className={s.likesWrapper}>
                    <span>likes: <span className={s.likesCount}>{props.likesCount}</span></span>
                </div>
            </div>
        </div>
    )
}
export default Post


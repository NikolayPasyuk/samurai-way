import React from 'react';
import {addPostAC, PostsType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';

type MapStateToPropsType = {
    posts: PostsType[]
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}
export type MyPostsCommonPropsType = {
    isOwner: boolean,
    userAvatar: string | null | undefined,
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, MyPostsCommonPropsType, RootStateType>
(mapStateToProps, mapDispatchToProps)(MyPosts);








import React from 'react';
import {addPostAC, PostType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';

type mapStatePropsType = {
    posts: Array<PostType>
}

type mapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)








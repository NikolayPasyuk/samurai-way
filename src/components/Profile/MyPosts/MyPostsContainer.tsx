import React from 'react';
import {addPostAC, PostType, updateNewTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';

type mapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}

type mapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewTextAC(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)








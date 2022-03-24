import React from 'react';
import {addPostAC, updateNewTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';


export type PotsType = {
    id: number
    message: string
    likesCount: number
}

type mapStatePropsType = {
    posts: Array<PotsType>
    newPostText: string
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

type mapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
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








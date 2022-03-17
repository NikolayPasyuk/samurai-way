import React from 'react';
import {StoreType} from '../../../redux/store';
import {addPostAC, updateNewTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

type MyPostsContainerPropsType = {
    store:StoreType
}

function MyPostsContainer(props: MyPostsContainerPropsType) {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        let action = updateNewTextAC(text)
        props.store.dispatch(action)
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />)

}

export default MyPostsContainer







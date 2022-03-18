import React from 'react';
import {addPostAC, updateNewTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()
                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }

                    const onPostChange = (text: string) => {
                        let action = updateNewTextAC(text)
                        store.dispatch(action)
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer







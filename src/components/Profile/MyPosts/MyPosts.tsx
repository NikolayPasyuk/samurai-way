import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = (values: FormDataNewPostType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


type FormDataNewPostType = {
    newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<FormDataNewPostType>>
    = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm<FormDataNewPostType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


export default MyPosts


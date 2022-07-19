import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';
import Button from '../../common/Button/Button';

const MyPosts = React.memo((props: MyPostsPropsType) => {
    const postsElements = [...props.posts].reverse().map((p,index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (values: FormDataNewPostType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.myPostsSection}>
            <h3 className={s.myPostsTitle}>My posts</h3>
            <div className={s.newPostSection}>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
});


export type FormDataNewPostType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataNewPostType>>
    = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.newPostCreateField}
                       component={Textarea} name="newPostText"
                       placeholder={'Post message'}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Button type={'submit'}
                        className={s.sendPostBtn}>
                    Send
                </Button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm<FormDataNewPostType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


export default MyPosts


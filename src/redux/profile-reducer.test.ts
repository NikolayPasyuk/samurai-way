import {addPostAC, deletePost, PostType, profileReducer} from './profile-reducer';
import {ProfileType} from '../api/api';

const state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ] as Array<PostType>,
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: null,
            vk: '',
            twitter: '',
            instagram: '',
            youtube: null,
            github: '',
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: ''
        }
    } as ProfileType,
    status: ''
}

describe('Profile reducer', () => {
    test('length of posts should be incremented', () => {
        let action = addPostAC('it-kamasutra');
        let newState = profileReducer(state, action);
        expect(newState.posts.length).toBe(3);
    });

    test('message on new post should be correct', () => {
        let action = addPostAC('it-kamasutra');
        let newState = profileReducer(state, action);
        expect(newState.posts[2].message).toBe('it-kamasutra');
    });

    test('after deleting length of messages should be decrement', () => {
        let action = deletePost(1);
        let newState = profileReducer(state, action);
        expect(newState.posts.length).toBe(1);
    });
})

test("after deleting length of messages shouldn't be decrement if id is incorrect", () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});
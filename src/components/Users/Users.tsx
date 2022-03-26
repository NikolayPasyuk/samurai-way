import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './users.module.css'

const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/217/276/5.jpg',
                followed: false,
                fullName: 'Nikolay',
                status: 'I am student',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/217/276/5.jpg',
                followed: true,
                fullName: 'Masha',
                status: 'I am student',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/217/276/5.jpg',
                followed: false,
                fullName: 'Bob',
                status: 'I am student',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users
import React from 'react';
import s from './Users.module.css'
import {Pagination} from '../common/Pagination/Pagination';
import {User} from './User/User';
import {UserType} from '../../api/api';

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    isOwner: number | null
}

export let Users: React.FC<UsersPropsType> = ({
                                                  totalUsersCount,
                                                  pageSize,
                                                  currentPage,
                                                  onPageChanged,
                                                  users,
                                                  follow,
                                                  unfollow,
                                                  followingInProgress,
                                                  isOwner
                                              }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionSizeCondition = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return 5;
        } else {
            return 15;
        }
    }

    return <div className={s.wrapper}>
        <Pagination totalItemsCount={totalUsersCount}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    pageSize={pageSize}
                    portionSize={portionSizeCondition()}
        />
        <div className={s.container}>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     follow={follow}
                                     unfollow={unfollow}
                                     followingInProgress={followingInProgress}
                                     isOwner={isOwner}
                    />,
                )
            }
        </div>
    </div>
}
import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import Users from './Users';
import {AppStateType} from '../../redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UsersType
} from '../../redux/users-reducer';

type mapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


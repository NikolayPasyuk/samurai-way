import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {follow, requestUsers, setCurrentPage, unfollow} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/preloader/Preloader';
import {compose} from 'redux';
import {UserType} from '../../api/api';
import stylePreloader from '../common/preloader/Preloader.module.css';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors';


type mapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    isOwner: number | null
}

type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = mapStatePropsType & mapDispatchPropsType


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <div className={stylePreloader.absolutePreloaderContainer}>
                    <Preloader/>
                </div> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   isOwner={this.props.isOwner}
            />
        </>
    }
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isOwner: state.auth.userId,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,
        {
            follow, unfollow, setCurrentPage, requestUsers
        })
)(UsersContainer)
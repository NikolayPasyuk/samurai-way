import React from 'react';
import Header from './Header';
import {RootStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {getAuthUserData, logout, setProfileSmallPhoto} from '../../redux/auth-reducer';

type mapStatePropsType = {
    login: string | null
    isAuth: boolean
    profileSmallPhoto: string | null
    userId: number | null
}
type mapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
    setProfileSmallPhoto: (userId: number) => void
}
export type HeaderPropsType = mapStatePropsType & mapDispatchPropsType


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
        if (this.props.userId) {
            this.props.setProfileSmallPhoto(this.props.userId);
        }
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profileSmallPhoto: state.auth.profileSmallPhoto,
        userId: state.auth.userId,
    }
}

export default connect<mapStatePropsType, mapDispatchPropsType, {}, RootStateType>
(mapStateToProps, {getAuthUserData, logout, setProfileSmallPhoto})(HeaderContainer);
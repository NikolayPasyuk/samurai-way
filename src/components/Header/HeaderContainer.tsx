import React from 'react';
import Header from './Header';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from '../../redux/auth-reducer';

type mapStatePropsType = {
    login: string
    isAuth: boolean
}
type mapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}
export type HeaderPropsType = mapStatePropsType & mapDispatchPropsType


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);
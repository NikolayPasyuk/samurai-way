import {connect} from 'react-redux';
import React from 'react';
import {compose} from 'redux';
import {Settings} from './Settings';
import {RootStateType} from '../../redux/redux-store';
import {logout} from '../../redux/auth-reducer';

type MapStateToPropsType = {
    isOwner: number | null
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isOwner: state.auth.userId,
    };
};

type MapDispatchToPropsType = {
    logout: () => void
}

export type SettingsPropsType = MapStateToPropsType & MapDispatchToPropsType;

class SettingsContainer extends React.Component<SettingsPropsType> {
    componentDidMount() {

    }

    render() {
        return <Settings isOwner={this.props.isOwner}
                         logout={this.props.logout}

        />
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
    (mapStateToProps, {logout}),)(SettingsContainer)
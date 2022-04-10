import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';


type mapStatePropsType = {
    a: number
}

type mapDispatchPropsType = {
    setUserProfile: (profile: null) => void
}
export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (): mapStatePropsType => ({
    a: 13
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)


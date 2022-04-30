import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false
    }

    render() {
        return (
            <div>
                <div>
                    <span>{this.props.status}</span>
                </div>
                <div>
                    <input value={this.props.status}/>
                </div>
            </div>
        )
    }
}


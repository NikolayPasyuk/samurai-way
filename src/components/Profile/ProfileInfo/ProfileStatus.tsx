import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        title: 'Nick'
    }

    activateEditMode() {
        console.log(this.state.editMode)
        this.setState({
            editMode: true
        })

        console.log(this.state.editMode)
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}


import React, {ChangeEvent} from 'react';
import s from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('componentDidUpdate')
    }

    render() {
        return <div>
            {!this.state.editMode ?
                <div>
                    <span className={s.status}
                          onClick={this.activateEditMode}>{this.props.status || "Status is not set"}
                    </span>
                </div>
                :
                <div>
                    <input autoFocus
                           onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}
                           className={s.editStatus}
                    >
                    </input>
                </div>
            }
        </div>
    }
}


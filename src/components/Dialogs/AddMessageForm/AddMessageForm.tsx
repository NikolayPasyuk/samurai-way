import {maxLengthCreator, required} from '../../../utils/validators/validators';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormsControls/FormsControls';

export type FormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export default reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

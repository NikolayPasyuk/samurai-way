import {maxLengthCreator, required} from '../../../utils/validators/validators';
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormsControls/FormsControls';
import Button from '../../common/Button/Button';
import s from '../Dialogs.module.css'

export type FormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={s.input}
                    component={Textarea}
                    validate={[required, maxLength50]}
                    name="newMessageBody"
                    placeholder="Enter your message"
                />
            </div>
            <div>
                <Button type={'submit'}
                        className={s.sendButton}>
                    Send
                </Button>
            </div>
        </form>
    )
}
export default reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

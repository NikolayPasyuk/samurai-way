import React from 'react';
import styles from './FormsControls.module.css'
import {Field, WrappedFieldsProps} from 'redux-form';
import {WrappedFieldMetaProps} from 'redux-form/lib/Field';


type FormsControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormsControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={hasError ? styles.formControlError : ''}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    );
};

export const Textarea: React.FC<WrappedFieldsProps> = (props) => {
    const {input, meta, ...restProps} = props
    // @ts-ignore
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldsProps> = (props) => {
    const {input, meta, ...restProps} = props
    // @ts-ignore
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder: string = '', name: string, validators: Array<any>, component: any, props = {}, text: string = '', wrapperClass: any, fieldClass: any) => (
    <div className={wrapperClass}>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
               className={fieldClass}
        />
        {text}
    </div>
)
import React from 'react';
import styles from './FormsControls.module.css'
import {WrappedFieldsProps} from 'redux-form';
import {WrappedFieldMetaProps} from 'redux-form/lib/Field';


type FormsControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormsControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
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
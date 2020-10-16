import React from "react";
import styles from "./FormsControls.module.css"
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>

  )
}

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>

  )
}

export const createField = (type, name, placeholder, validate, component, props ={}, text = "") => {
  return (
    <div>
      <Field type={type}
             name={name}
             placeholder={placeholder}
             validate={validate}
             component={component}
             {...props}
      /> {text}
    </div>
  )
}



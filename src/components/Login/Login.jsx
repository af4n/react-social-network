import React from "react";
import styles from "../Common/FormsControls/FormsControls.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";

const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField("text", "email", "Email", [required, maxLength30], Input)}
      {createField("password", "password", "Password", [required, maxLength30], Input)}
      {createField("checkbox", "rememberMe", null, null, Input)}
      {props.captcha && <img src={props.captcha} alt="captcha"/>}
      {props.error && <div className={styles.formSummaryError}>
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to="/profile" />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {
  login
})
(Login);
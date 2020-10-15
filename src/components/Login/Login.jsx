import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Input} from "../Common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";

const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type="text" name={"email"} placeholder={"Email"} component={Input}
               validate={[required, maxLength30]}/>
      </div>
      <div>
        <Field type="password" name={"password"} placeholder={"Password"} component={Input}
               validate={[required, maxLength30]}/>
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={Input}/> Remember me
      </div>
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
    return <Redirect to={"/profile"} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
  login
})
(Login);
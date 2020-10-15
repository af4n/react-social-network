import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Input} from "../Common/FormsControls/FormsControls";

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type="text" name={"login"} placeholder={"Login"} component={Input}
               validate={[required, maxLength20]}/>
      </div>
      <div>
        <Field type="text" name={"password"} placeholder={"Password"} component={Input}
               validate={[required, maxLength20]}/>
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
    console.log(formData);
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login;
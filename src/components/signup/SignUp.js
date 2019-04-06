import React, { Component } from 'react'
import SignupForm from './SignupForm'
import Add from './Add'
import  MyReduxForm  from './MyReduxForm'

export class SignUp extends Component {
  render() {
    return (
<div className="row">
    <div className="col-md-3"></div>
    <div className="col-md-6">
        <SignupForm></SignupForm>
        <Add></Add>
       <MyReduxForm></MyReduxForm>
    </div>
    <div className="col-md-3"></div>
</div>
    )
  }
}
export default SignUp


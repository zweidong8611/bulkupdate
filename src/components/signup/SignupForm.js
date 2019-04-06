import React, { Component } from 'react'

export class SignupForm extends Component {
  state = { username: "" };

  myonSubmit=(e)=>{
    e.preventDefault();
    console.log(e);
}

  render() {


    return (
      <form onSubmit={this.myonSubmit}>
        <h1>Join me!</h1>
        <div className="form-group">
          <label className="control-label">UserName: </label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            className="form-control"
            onChange={
              (e) => {
                //  console.log('e.target', e.target)
                this.setState({ username: e.target.value })

              }}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>
    )
  }
}


export default SignupForm




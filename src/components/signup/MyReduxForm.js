import React, { Component } from 'react'
/*eslint-disable no-unused-vars*/
import { Field, reduxForm } from 'redux-form'
import Listall from '../../api/Listall'

export class MyReduxForm extends Component {
  rendererrors = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div>{error} </div>
      );
    }
  }

  renderForm = ({ input, label, meta }) => {
    console.log('=================meta', meta)
    return (
      <div>
        <label className="control-label">{label}</label>
        <input {...input} autoComplete="off" className="form-control" />
        {this.rendererrors(meta)}
        {/*         <div>{meta.error}</div> */}
      </div>
    );
  }


  myonSubmit = async formvalue => {
    console.log('-=====formvalue==========================', formvalue)
    // const term='query { allWgries {    nodes { dwry ,lxfs,ds  }}}'
    // const response = await Listall.post('/graphql',{
    //   params: { query: term }
    // });
    const response = await Listall.get('/search/photos', {
      params: { query: 'car' }
    });
    console.log(response);
  }

  componentDidMount = async () => {
    const term = `query { allWgries {    nodes { dwry ,lxfs,ds  }}}`
//    term = `query{ wgryByLxfs(lxfs:"18221698859") {lxfs,dwry,  ds  }}`
    const response = await Listall.post('/graphql',
      //params: { query: term }
      term
    );

    // const response = await Listall.get('/search/photos', {
    //   params: { query: 'car' }
    // });
    console.log("======================startup===========", response);
  }


  render() {
    return (

      <form onSubmit={this.props.handleSubmit(this.myonSubmit)}>
        <div className="form-group">
          <Field name="name" component={this.renderForm} label="请输入姓名" />
          <Field name="age" component={this.renderForm} label="请输入年龄" />
        </div>
        <div className="form-group">
          <button>Submit</button>
        </div>
      </form>

    )
  }
}

const validate = (formvalues) => {
  const errors = {}
  if (!formvalues.name) { errors.name = "You must enter a name" }
  if (!formvalues.age) { errors.age = "You must enter a age" }

  return errors;
}

export default reduxForm({
  form: 'myreduxForm',
  validate: validate
})(MyReduxForm)

